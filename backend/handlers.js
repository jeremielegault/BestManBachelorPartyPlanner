"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

// import { Client } from "@googlemaps/google-maps-services-js";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const request = require("request-promise");

const assert = require("assert");

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const getLatLon = async (req, res) => {
  const latlngreq = {
    method: "POST",
    uri: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAHjbhtGrQnSNHas2LvKI2-UOeu0bfT6C0",
  };

  return request(latlngreq)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      console.log("Parsed Response", parsedResponse);
      return res.status(201).json({
        data: parsedResponse.location,
      });
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

// This function adds one reservation
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
};
