require("dotenv").config();

const { Client } = require("@googlemaps/google-maps-services-js");

// console.log(process.env.GOOGLE_MAPS_API_KEY);

const client = new Client({});

module.exports = {
  client,
};
