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

const Home2 = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Plant trees in Oakhurst</Typography>

              <Typography variant="body2">
                We need 5-10 people this Saturday to come help plant trees
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/Activity">
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Rescue Greyhound Shelter!</Typography>

              <Typography variant="body2">
                We are always looking for people. Monday through Friday during
                the day!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Habitat for Humanity</Typography>

              <Typography variant="body2">
                Come help and learn how to build a house!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Elder Care</Typography>

              <Typography variant="body2">
                Spend time with someone. It will make you feel great!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">After School Program</Typography>

              <Typography variant="body2">
                Tutors needed for grades k-12 after school program in the
                Atlanta area.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">Atlanta Food Bank</Typography>

              <Typography variant="body2">
                Need food prep people as well as drivers. Groups welcome.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
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

export default Home2;
