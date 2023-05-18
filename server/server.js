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

// ---- GET ----

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

app.get("/cookies/:category", async (request, response) => {
  const cookies = await Cookie.find(request.params);
  response.json(cookies);
});

app.get("/random", async (request, response) => {
  const cookies = await Cookie.find({});
  const random = Math.floor(Math.random() * cookies.length);
  response.json(cookies[random]);
});

// ---- POST ----

app.post("/cookie", async function (request, response) {
  console.log(request.body);
  const newCookie = await Cookie.create(request.body);
  response.json(newCookie);
});

// ---- DELETE ----

app.delete("/cookie/:id", async (request, response) => {
  const deletedCookie = await Cookie.findByIdAndDelete(request.params.id);
  response.json(deletedCookie);
});

app.listen(PORT, () => {
  console.log("LISTENING ON PORT " + PORT);
});
