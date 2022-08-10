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
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main className="flex-row">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList posts={posts} title="Some Feed for Post(s)..." />
      )}
    </main>
  );
};

export default Home;
