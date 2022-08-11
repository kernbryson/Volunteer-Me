import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { bgcolor } from "@mui/system";
const styles={
  pics:{
    width:"20vw",
    height:"25vh",
    float:"right"
  }
}

const CondPostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
    
  }
  console.log(posts)
  return (
    <div className="flex homepadding">
      <h2 className="homecenter">Your Place for Volunteer Activities</h2>
      <h4>Current Activity Listings:</h4>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            // <div key={post._id}>

            <Grid key={post._id}  item xs={12} md={6} lg={4}>
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
              </Card>
            </Grid>

          ))}
        ;
      </Grid>
    </div>
  );
};

export default CondPostList;
