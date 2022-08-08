import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div className="flex-row">
      <h3>Current Activity Listings:</h3>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            // <div key={post._id}>

            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="body2">
                    <p>{post.postText}</p>
                    <p>{post.category}</p>
                    <p>Time: {post.time}</p>
                    <p>Contact info: {post.contact}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link className="btn btn-primary " to={`/posts/${post._id}`}>
                    Learn More
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        ;
      </Grid>
    </div>
  );
};

export default PostList;
