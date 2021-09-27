"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  //
  //get all the flights
  .get("/getflights", getFlights)
  //get one flight based on id
  .get("/getflights/seats/:_id", getFlight)
  // Get the reservations
  .get("/getreservations", getReservations)
  // Add a reservation
  .post("/addreservations", addReservations)
  // Get single reservation based on ID
  .get("/getreservation/:id", getSingleReservation)
  // Delete single reservation based on ID
  .delete("/deletereservation/:id", deleteReservation)
  // Update reservation info
  .put("/getreservation/:id", updateReservation)

  //
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
