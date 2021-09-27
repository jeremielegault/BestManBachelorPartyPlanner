const fs = require("file-system");

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "SlingShotAir";

const { flights, reservations } = require("./data.js");

const allSeats = Object.values(flights)[0];

const allReservations = reservations[0];

const flightNumbers = Object.keys(flights);

let allFlights = [];

flightNumbers.forEach((flight, index) => {
  allFlights.push({ _id: flight, seats: allSeats });
});

// console.log(allSeats);

const batchImport = async () => {
  const client = await new MongoClient(MONGO_URI, options);

  await client.connect();

  try {
    const db = client.db(dbName);

    // const seatResult = await db.collection("flights").insertMany(allFlights);

    // const resResult = await db
    //   .collection("reservations")
    //   .insertOne(allReservations);

    const flightResult = await db
      .collection("singleFlight")
      .insertMany(allFlights);

    assert.equal(allSeats.length, seatResult.insertedCount);
    assert.equal(allReservations.length, resResult.insertedCount);
    assert.equal(allFlights.length, flightResult.insertedCount);

    console.log("These things worked");
  } catch (err) {
    console.log("There was a terrible mistake");
  }

  client.close();
  console.log("disconnected!");
};

batchImport();
