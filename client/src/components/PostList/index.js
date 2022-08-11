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
    width:"250px",
    height:"170px",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"2.5vw"
  },
  button:{
    width:"20vw"
  }
}

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div className="flex homepadding ">
      <h2 className="homecenter">Your Place for Volunteer Activities</h2>
      <h4>Current Activity Listings:</h4>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            // <div key={post._id}>

            <Grid item xs={12} md={6} lg={4}>
              <Card className="card-bg " sx={{ minWidth: 275, minHeight: 400 }}>
                <CardHeader
                  title={post.title}
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
                  <Typography className="justify-content-center">
                  <img alt="test" style={styles.pics} src={require(`../images/${post.category}.jpg`).default} />
                  </Typography>

                </CardContent>

          
                <CardActions className="justify-content-center" >
                  
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
