"use strict";

//lambda api for making a serverless api
const l_api = require("lambda-api")();

const mongoose = require("mongoose");

const { MONGO_CONNECTION_STRING } = require("./config");


//lets insert user models
const UserModel = require("./models/User");


//mongodb connection
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});


/* const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
  console.log("Success !")
}); */


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
