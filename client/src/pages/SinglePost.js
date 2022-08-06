import React from 'react';
import { Grid, Link } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(
    QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h5"
            >
              Plant trees in Oakhurst
            </Typography>
            
            <Typography variant="body2">
              We need 5-10 people this Saturday to come help plant trees
            </Typography>
            <Typography variant="body2">
              Put much more info here such as potentiall:
              <ul>date</ul>
              <ul>ability to sign up</ul>
              <ul>map</ul>
              <ul>dontate</ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/">
            
            <Button size="small">Donate</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
  {/* </div> */}
    <div className="my-3">
      {/* <h3 className="card-header bg-dark text-light p-2 m-0">
        {post.postAuthor} <br />

      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {post.postText}
        </blockquote>
      </div> */}

      <div className="my-5">
        <CommentList comments={post.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm postId={post._id} />
      </div>
    </div>
    </div>
  );
};

export default SinglePost
;
