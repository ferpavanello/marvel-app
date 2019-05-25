const express = require("express");
const router = express.Router();

const axios = require("axios");

const api =
  "https://gateway.marvel.com:443/v1/public/events/29?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b";

router.get("/", (req, res) => {
  axios.get(api).then(response => {
    console.log(response.data.data.results[0]);
  });
});

module.exports = router;
