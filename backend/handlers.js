"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var axios = require("axios");

const request = require("request-promise");

const assert = require("assert");

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// {
//   "data": {
//     "lat": 45.4524928,
//     "lng": -73.5936512
//   }
// }
// Handler to generate user's location (latitude and longitude)
// const getLatLon = async (req, res) => {
//   const latlngreq = {
//     method: "POST",
//     uri: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAHjbhtGrQnSNHas2LvKI2-UOeu0bfT6C0",
//   };

//   return request(latlngreq)
//     .then((response) => JSON.parse(response))
//     .then((parsedResponse) => {
//       return getLocationsByLatLon(
//         parsedResponse.data.lat,
//         parsedResponse.data.lng
//       );
//     })
//     .catch((err) => {
//       return err.error ? JSON.parse(err.error) : err;
//     });
// };

// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation GEOLOCATION FROM THE BROWSER

const getLatLon = async (req, res) => {
  getLocationsByLatLon(req.query.lat, req.query.long, res);
};

// Takes in the lat and lon and returns new restaurants closeby
const getLocationsByLatLon = async (lat, long, res) => {
  var request = {
    method: "get",
    url:
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      lat +
      "," +
      long +
      "&radius=15000&type=bar&maxprice=2&key=AIzaSyAHjbhtGrQnSNHas2LvKI2-UOeu0bfT6C0",
    headers: {},
  };
  console.log("Second function");
  return axios(request)
    .then(function (response) {
      console.log("response:", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Handler to get Night Out Alcohol recommendations CHEAP

const getCheapBars = async (req, res) => {
  console.log("It worked");

  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.452492799999995,-73.5936512&radius=15000&type=bar&maxprice=2&key=AIzaSyAHjbhtGrQnSNHas2LvKI2-UOeu0bfT6C0",
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// This function adds one reservation to MongoDB
const addReservations = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("SlingShotAir");

  try {
    let seatAvailable = false;

    const query = { _id: req.body.flight };

    const availability = await db.collection("singleFlight").findOne(query);

    availability.seats.forEach((seat) => {
      if (seat.isAvailable && seat.id === req.body.seat) {
        seat.isAvailable = false;
        seatAvailable = true;
      }
    });

    const newValue = { $set: { seats: availability.seats } };

    await db.collection("singleFlight").updateOne(query, newValue);

    if (seatAvailable) {
      await db.collection("reservations").insertOne(req.body);
    } else {
      res.status(400).json({
        status: 400,
        message: "error! seat is already reserved",
      });
    }

    res
      .status(201)
      .json({ status: 201, message: "new reservation added", data: req.body });
    client.close();
  } catch {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: "Nothing to return",
    });
  }
};

module.exports = {
  addReservations,
  getLatLon,
  getCheapBars,
};
