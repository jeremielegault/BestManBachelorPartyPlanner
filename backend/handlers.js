"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const assert = require("assert");

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = async (req, res) => {
  const flightNumbers = [];

  const client = await new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("SlingShotAir");

  const flights = await db.collection("singleFlight").find().toArray();

  flights.forEach((flight) => {
    flightNumbers.push(flight._id);
  });

  if (flights.length > 0) {
    res.status(200).json({ status: 200, data: flightNumbers });
  } else {
    res.status(404).json({
      status: 404,
      data: flightNumbers,
      error: "Nothing to return",
    });
  }
  client.close();
};

// This function gives us all the seats
const getFlight = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);

  const { _id } = req.params;
  // const flightsNumber = req.params._id;

  // connect the client
  await client.connect();

  const db = client.db("SlingShotAir");

  const seats = await db.collection("singleFlight").find({ _id }).toArray();

  if (seats.length > 0) {
    return res.status(200).json({ status: 200, data: seats });
  } else {
    return res.status(404).json({
      status: 404,
      error: "Sadly, there are no flights to return.",
    });
  }

  client.close();

  console.log("disconnected!");
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

// This function gets all reservations
const getReservations = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("SlingShotAir");

  const reservations = await db.collection("reservations").find().toArray();

  if (reservations.length > 0) {
    res.status(200).json({ status: 200, data: reservations });
  } else {
    res.status(404).json({
      status: 404,
      error: "Nothing to return",
    });
  }
  client.close();
};

const getSingleReservation = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("SlingShotAir");
  // use id from mongodb
  const id = req.params.id;

  await db.collection("reservations").findOne({ id });

  console.log("single Reservation", id);

  await db.collection("reservations").findOne({ id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, id, data: result })
      : res.status(404).json({ status: 404, id, data: "Not Found" });
    client.close();
  });
};

const deleteReservation = async (req, res) => {
  try {
    // creates a new client
    const client = await new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("SlingShotAir");

    const { id } = req.params;

    const reservations = await db.collection("reservations").findOne({ id });

    const result = await db.collection("reservations").deleteOne({ id });

    if (result) {
      const query = { _id: reservations.flight };
      const availability = await db.collection("singleFlight").findOne(query);

      availability.seats.forEach((seat) => {
        if (seat.id === reservations.seat) {
          seat.isAvailable = true;
        }
      });
      const newValues = { $set: { seats: availability.seats } };
      await db.collection("singleFlight").updateOne(query, newValues);
    }

    res.status(200).json({
      status: 200,
      message: "It worked and I am so pleased",
    });

    client.close();
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: id, message: err.message });
  }
};

const updateReservation = async (req, res) => {
  const id = req.params.id;

  const client = await new MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = client.db("SlingShotAir");

    const query = { id };

    const newValues = {
      $set: {
        flight: req.body.flight,
        seat: req.body.seat,
        givenName: req.body.givenName,
        surname: req.body.surname,
        email: req.body.email,
      },
    };

    const oldRes = await db.collection("reservations").findOne(query);

    await db.collection("reservations").updateOne(query, newValues);

    if (newValues) {
      const query = { _id: req.body.flight };

      const availability = await db.collection("singleFlight").findOne(query);

      availability.seats.forEach((seat) => {
        if (seat.id === req.body.seat) {
          seat.isAvailable = false;
        }
        if (seat.id === oldRes.seat) {
          seat.isAvailable = true;
        }
      });

      const newValue = { $set: { seats: availability.seats } };

      await db.collection("singleFlight").updateOne(query, newValue);

      res.status(200).json({
        status: 200,
        message: "reservation updated",
        ...newValues.$set,
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "you can't update this reservation" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
