import React, { useState } from "react";
import { Grid, Link } from "@mui/material";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();
  const [buttonText, setButtonText] = useState("I want to go!");
  const goingToArray = [];
  const styles={
    pics:{
      width:"350px",
      height:"270px",
    },
    card:{
      width:"60vw"
    }

  }


  function handleClick() {
    setButtonText("I'm Going!");
    if(buttonText == "I'm Going!"){
      setButtonText("I want to go!")
    }
   
  }
  
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });


  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-5" >
      <Grid container spacing={3} >
        <Grid item xs={12} md={12} >
          <Card className="card-bg cardmedia" style={styles.card}>
            <CardHeader className="cardheader-bg " title={post.title} />
            <CardContent>
              <Typography variant="h5">Description</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.postText}
              </Typography>
              <Typography variant="h5">Location</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.location}
              </Typography>
              <img className="float-end picture" style={styles.pics} alt="test"  src={require(`../components/images/${post.category}.jpg`).default} />
              <Typography variant="h5">Category</Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.category}
              </Typography>

              <Typography variant="h5">Time of the event</Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.time}
              </Typography>

              <Typography variant="h5">Contact Information</Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.contact}
              </Typography>
              <Typography variant="h5">Date of the event</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.volunteerDate}
              </Typography>

            </CardContent>
            <CardActions>
              <Button variant="contained" className="btn btn-primary"  size="large" onClick={handleClick}>
                {buttonText}
              </Button>
  
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} className="float-end">
          <div className="my-2">
            <div className="my-2">
              <CommentList comments={post.comments} />
            </div>
            <div>
              <CommentForm postId={post._id} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SinglePost;
