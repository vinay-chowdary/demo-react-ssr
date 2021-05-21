import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>Hello home2</h1>
      <Link to="/">home</Link>
      <br></br>

      <Link to="/memes">Memes</Link>

      <br></br>
      <a href="/">home link</a>
      <br></br>
      <a href="/memes">memes link</a>
    </div>
  );
};

export default Page2;
