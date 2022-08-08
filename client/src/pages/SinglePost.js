import React from "react";
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

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });
  console.log(data);
  const post = data?.post || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardHeader title={post.postText} />
            <CardContent>
              <Typography variant="h5">
                Location
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.location}
              </Typography>
              <Typography variant="h5">
                Category
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.category}
              </Typography>

              <Typography variant="h5">
                Time of the event
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.time}
              </Typography>

              <Typography variant="h5">
                Contact Information
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.contact}
              </Typography>
              <Typography variant="h5">
                Date of the event
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.volunteerDate}
               </Typography>
            </CardContent>
            <CardActions>
              <Link href="/">
                <Button variant="contained" size="large">Donate</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
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
