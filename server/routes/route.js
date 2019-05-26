const express = require("express");
const router = express.Router();

const axios = require("axios");
/*
const api =
  "https://gateway.marvel.com:443/v1/public/events/29?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b";
*/
const api = "https://jsonplaceholder.typicode.com/posts";

router.get("/", (req, res) => {
  axios
    .get(api)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
