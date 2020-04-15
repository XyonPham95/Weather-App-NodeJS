var express = require("express");
var router = express.Router();
const getCoords = require("../utils/getCoord");
const getWeather = require("../utils/getWeather");

/* GET home page. */

router.get("/weather", function (req, res) {
  const query = req.query;
  console.log(query);
  if (!req.query.city) {
    return res.redirect("/");
  }

  getCoords(res, req.query.city, getWeather);
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "My weather App" });
});

module.exports = router;
