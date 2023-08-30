// Use to make the server
const express = require("express");
// Cross-origin: Used to make connection better
const cors = require("cors");
// This parses the body sent by the front end
const bodyParser = require("body-parser");
// Some database crap
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("db connected");
}

// Schema validates the kind of data
const userSchema = new mongoose.Schema({
  email: String,
});

// User is a type of a class
const User = mongoose.model("User", userSchema);
const server = express();

// middleware
server.use(cors());
server.use(bodyParser.json());

//API
// CRUD - Create
server.post("/demo", async (req, res) => {
  let user = new User();
  user.email = req.body.email;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.get("/demo", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

server.listen(8080, () => {
  console.log("server started");
});
