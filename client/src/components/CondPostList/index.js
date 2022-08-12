import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { REMOVE_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import { useMutation } from "@apollo/client";


const CondPostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const [postId, setpostId] = useState("");
  const [removePost, { error }] = useMutation(REMOVE_POST, {
    update(cache, { data: { addThought } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [removePost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, removePost] } },
      });
    },
  });

  const handleFormSubmit = async (event, postId,) => {
    event.preventDefault();

    try {
      const { data } = await removePost({
        variables: {
          postId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "deletePost") {
      removePost(value);
    }
  };


  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  console.log(posts);
  return (
    <div className="flex homepadding">
      <h2 className="homecenter">Your Place for Volunteer Activities</h2>
      <h4>Current Activity Listings:</h4>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (

            <Grid key={post._id} item xs={12} md={6} lg={4}>

              <Card className="card-bg" sx={{ minWidth: 275, minHeight: 100 }}>
                <CardHeader
                  title={post.title}
                  titleTypographyProps={{
                    fontSize: 20,
                    mb: 0,
                  }}
                  className="cardheader-bg"
                />

                <CardActions className="centerbtn">
                  <Link className="btn btn-primary " to={`/posts/${post._id}`}>
                    View Post
                  </Link>
                  
                </CardActions>
                <form className="d-flex justify-content-center p-2" onSubmit={(event)=>handleFormSubmit(event, post._id)}>
                  <button
                  className="btn btn-primary"
                    name="postId"
                    onChange={handleChange}
                    value={post.id}
                  >Delete Activity</button>
                </form>
            
              </Card>
            </Grid>
          ))}
        ;
      </Grid>
    </div>
  );
};

export default CondPostList;
