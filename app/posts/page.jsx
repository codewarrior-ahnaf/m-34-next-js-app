import React from "react";
import Post from "../components/Post";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <h2>Post Page: {posts.length}</h2>
      <div className="grid grid-cols-4 gap-3 p-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
