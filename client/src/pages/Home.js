import React from "react";
import { useQuery } from "@apollo/client";
import PostList from "../components/PostList";
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    
    <main>
      
      <div className="">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Post(s)..." />
          )}
        </div>
        
      </div>
      
    </main>
  )
};

export default Home;
