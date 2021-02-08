"use strict";

//lambda api for making a serverless api
const l_api = require("lambda-api")();

const mongoose = require("mongoose");

const { MONGO_CONNECTION_STRING } = require("./config");


//mongodb connection
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});


/* mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 */
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
  console.log("Success !")
});

//lets insert user models
const UserModel = require("./models/User");

l_api.get("/", async (req, res) => {
  return {
    status: "OK",
  };
});

l_api.post("/login", async (req, res) => {
  return req.body;
});

l_api.post("/register", async (req, res) => {
  try {
    const USER = new UserModel(req.body);

    await USER.save();
    return {
      message: "It was a success",
      val: USER,
    };
  } catch (e) {
    console.error(e);
    return {
      message: "There was an error.",
      dInfo: e,
    };
  }
});

module.exports.hello = async (event, context) => {
  return await l_api.run(event, context);
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
