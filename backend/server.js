"use strict";

// import the needed node_modules.
const express = require("express");

const morgan = require("morgan");

var cors = require("cors");

const {
  addReservations,
  getCheapBars,
  getLocationsByLatLon,
  getHospitals,
  getActivities,
  getSingleReservation,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  .use(cors())
  .enable("trust proxy")

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  // Add a reservation
  .post("/addreservations", addReservations)

  // Get Lat and Lon of user
  // .get("/getlatlon", getLatLon)

  // Get cheap bars close to the user
  .get("/getcheapbars", getCheapBars)

  // Fetch recommendations based  on user input from GOOGLE
  .get("/getlocationsbylatlon/:lat/:long/:type/:maxprice", getLocationsByLatLon)

  // Fetch hospitals based  on user input from GOOGLE
  .get("/gethospitals/:lat/:long", getHospitals)

  // Fetch hospitals based  on user input from GOOGLE
  .get("/getactivities/:lat/:long/:type", getActivities)

  // Get single reservation based on ID
  .get("/getreservation/:id", getSingleReservation)

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
