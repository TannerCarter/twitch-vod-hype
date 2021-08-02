require("dotenv").config();
const router = require("express").Router();
const fetch = require("node-fetch");
const axios = require("axios");

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
router.post("/", (req, res) => {
  console.log("======================");

  fetch(process.env.STREAMS_URL, {
    method: "GET",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: "Bearer " + process.env.access_token,
      "Content-Type": "application/json",
    },
  })
    .then((dbStreamData) => res.text(dbStreamData))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*router.post("/", async (req, res) => {
  var options = {
    method: "POST",
    url: process.env.STREAM_URL,
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: "Bearer " + process.env.access_token,
      "Content-Type": "application/json",
    },
  };
  const result = await axios(options);
});

module.exports = router;*/
