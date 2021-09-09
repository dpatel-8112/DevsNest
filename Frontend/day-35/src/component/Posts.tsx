import React from "react";
import Post from "./Post";
import Stories from "./Stories";

interface Props {}

const Posts = (props: Props) => {
  return (
    <div className="Posts_Container">
      <Stories />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
