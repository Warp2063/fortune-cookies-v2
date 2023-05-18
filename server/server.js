const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const bp = require("body-parser");

const Cookie = require("./models/cookie");

app.use(bp.json());

app.get("/", (request, response) => {
  response.json("You are on the root of the Fortune Cookies Server");
});

app.get("/cookies", async (request, response) => {
  const cookies = await Cookie.find({});
  response.json(cookies);
});

app.get("/cookie/:id", async (request, response) => {
  const gotCookie = await Cookie.findById(request.params.id);
  response.json(gotCookie);
});

app.get("/random", async (request, response) => {
  const cookies = await Cookie.find({});
  const random = Math.floor(Math.random() * cookies.length);
  response.json(cookies[random]);
});

app.listen(PORT, () => {
  console.log("LISTENING ON PORT " + PORT);
});
