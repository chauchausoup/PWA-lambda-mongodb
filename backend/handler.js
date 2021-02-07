"use strict";

//lambda api for making a serverless api
const l_api = require("lambda-api")();

//database via mongoose integration
const { KITTY } = require("./data");

//login
//register

l_api.get("/", async (req, res) => {
  return {
    status: "OK",
  };
});

l_api.get("/user", async (req, res) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      KITTY
    }),
  };
});

l_api.get("/login", async (req, res) => {
  return {
    status: "OK",
  };
});

l_api.get("/register", async (req, res) => {});

/* 



*/

module.exports.hello = async (event, context) => {
  return await l_api.run(event, context);
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
