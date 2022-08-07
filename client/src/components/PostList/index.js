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
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <Grid key={post._id} container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5">
                    {" "}
                    {showUsername ? (
                      <Link
                        className="text-light"
                        to={`/profiles/${post.postAuthor}`}
                      >
                        {post.postAuthor} <br />
                        <span style={{ fontSize: "1rem" }}>
                          created this post on {post.createdAt}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <span style={{ fontSize: "1rem" }}>
                          You created this post on {post.createdAt}
                        </span>
                      </>
                    )}
                    ;
                  </Typography>

                  <Typography variant="body2">
                    <p>{post.postText}</p>
                    <p>{post.location}</p>
                    <p>{post.category}</p>
                    <p>{post.time}</p>
                    <p>{post.contact}</p>
                    <p>{post.volunteerDate}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/posts/${post._id}`}
                  >
                    Join the discussion on this post.
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      ;
    </div>
  );
};

export default PostList;
