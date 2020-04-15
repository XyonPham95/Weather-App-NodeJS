const request = require("request");

function getCoord(res, city, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city
  )}.json?access_token=${process.env.MAPBOX}`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      return res.render("weather", {
        error: "Something wrong when fetching your location",
      });
    }
    console.log(body);

    if (body.features && body.features.length === 0) {
      return res.render("weather", { error: "We cannot find your location" });
    }
    const [lng, lat] = body.features[0].geometry.coordinates;

    callback(res, body.features[0].place_name, lng, lat);
  });
}

module.exports = getCoord;
