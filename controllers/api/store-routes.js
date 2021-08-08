//require("dotenv").config();
//const router = require("express").Router();
//const request = require("request");

//const tokenReq = (url, callback) => {
//  const options = {
//    url: process.env.GET_TOKEN,
//    json: true,
//    body: {
//      client_id: process.env.CLIENT_ID,
//      client_secret: process.env.CLIENT_SECRET,
//      grant_type: "client_credentials",
//    },
//  };
//  request.post(options, (err, res, body) => {
//    if (err) {
//      return console.log(err);
//    }
//    console.log("Status: ${response.statusCode}");
//    console.log(body);
//
//   callback(res);
//  });
//};

//tokenReq(process.env.GET_TOKEN, (res) => {
//  console.log(res);
//});

//require("dotenv").config();

//const fetch = require("node-fetch");

//fetch(process.env.STREAMS_URL, {
//  method: "GET",
//  headers: {
//    "Client-ID": process.env.CLIENT_ID,
//    Authorization: "Bearer " + process.env.access_token,
//  },
//})
//  .then((res) => res.json())
//  .then((res) => {
//   console.log(res);
//  });

//module.exports = router;

//POST
