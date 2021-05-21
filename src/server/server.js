// require("ignore-styles");

// require("@babel/register")({
//   ignore: [/(node_modules)/],
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// });
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import React from "react";
// import mongoose from "mongoose";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
import { renderToString } from "react-dom/server";
import template from "./template";
import createStore from "./store";
import { Provider } from "react-redux";

// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("database connection established"))
//   .catch((err) => console.log(err.message));

dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.static("build/public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("*", (req, res) => {
  const store = createStore();
  const component = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  const document = template(component);
  res.send(document);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server started at port ${port}`));
