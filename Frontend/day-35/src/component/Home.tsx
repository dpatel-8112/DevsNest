import React from "react";
import Header from "./Header";
import Main from "./Main";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
