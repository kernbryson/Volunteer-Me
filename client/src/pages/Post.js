import React from "react";
import { Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";




const Post = () => {
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
        <p>
      Put ability to add comments down here
      </p>
      </Grid>
    </div>
  );
};

// import { QUERY_POSTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_POSTS);
//   const posts = data?.posts || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">

//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <PostList
//               posts={posts}
//               title="Some Feed for Post(s)..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

export default Post;