"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const { REACT_APP_YELP_API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var axios = require("axios");

const request = require("request-promise");

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

// Takes in the lat and lon and returns a variety of restaurants and bars closeby
const getLocationsByLatLon = async (req, res) => {
  console.log("reqHandler", req.params);

  console.log("API", REACT_APP_GOOGLE_MAPS_API_KEY);
  console.log("MongoURI", REACT_APP_MONGO_URI);

  var request = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.long}&radius=30000&keyword=${req.params.type}&maxprice=${req.params.maxprice}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      // console.log("response locations:", response.data);
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Handler to generate hospitals nearby
const getHospitals = async (req, res) => {
  console.log("reqHandler", req.params);

  var request = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.long}&radius=30000&keyword=hospital&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      // console.log("response locations:", response.data);
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Handler to generate activities nearby
const getActivities = async (req, res) => {
  console.log("reqHandler", req.params);

  var request = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.long}&radius=30000&keyword=${req.params.type}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  return axios(request)
    .then(function (response) {
      // console.log("response locations:", response.data);
      res.status(200).json({ status: 200, data: response.data });
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
    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.452492799999995,-73.5936512&radius=15000&type=bar&maxprice=2&key=AIzaSyAHjbhtGrQnSNHas2LvKIvvv2-UOeu0bfT6vrvC0",
    headers: {},
  };

  return config
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// This function adds one reservation to MongoDB
const addReservations = async (req, res) => {
  console.log("add reservations");
  try {
    const client = new MongoClient(REACT_APP_MONGO_URI, options);

    await client.connect();

    const db = client.db("BestManBachPlanner");

    await db.collection("fullFormData").insertOne(req.body);

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
  getCheapBars,
  getLocationsByLatLon,
  getHospitals,
  getActivities,
};
