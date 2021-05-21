import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Server side rendering of react...</h1>
      <Link to="/page">Page2</Link>
      <br></br>
      <Link to="/memes">memes</Link>
      <br></br>
      <a href="/page">page link</a>
      <br></br>
      <a href="/memes">memes link</a>
    </div>
  );
};

export default Home;
