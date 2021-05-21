import React, { useEffect } from "react";
import { fetchMemes } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Memes.css";

const Memes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const memes = useSelector((state) => state.memes);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/page">Page2</Link>
      <h1>Here are the list of memes</h1>
      <ul>
        {memes.map((meme) => (
          <li key={meme._id} className="meme">
            name={meme.name}
            <br></br>
            caption={meme.caption}
            <br></br>
            url={meme.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memes;
