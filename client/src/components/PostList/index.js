import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { bgcolor } from "@mui/system";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div className="flex homepadding">
      <h2 className="homecenter">Your Place for Volunteer Activities</h2>
      <h4>Current Activity Listings:</h4>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            // <div key={post._id}>

            <Grid item xs={12} md={6} lg={4}>
              <Card className="card-bg" sx={{ minWidth: 275, minHeight: 350 }}>
                <CardHeader
                  title={post.postText}
                  titleTypographyProps={{
                    fontSize: 20,
                    mb: 0,
                      }}
                  className="cardheader-bg"
                />
                <CardContent>
                  <Typography variant="h6">Category</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.category}
                  </Typography>
                  <Typography variant="h6">Location</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.location}
                  </Typography>
                  <Typography variant="h6">Date of the event</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.volunteerDate}
                  </Typography>


                  {/* <Typography variant="h6">Time of the event</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.time}
                  </Typography>

                  <Typography variant="h6">Contact Information</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.contact}
                  </Typography> */}
                </CardContent>

                {/* <CardContent>
                  <Typography variant="body2">
                    <p>{post.postText}</p>
                    <p>{post.category}</p>
                    <p>Time: {post.time}</p>
                    <p>Contact info: {post.contact}</p>
                  </Typography>
                </CardContent> */}
                <CardActions className="centerbtn">
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
