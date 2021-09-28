const request = require("request-promise");

// Gets the lat and lng of the user

const getLatLon = async (req, res) => {
  const latlngreq = {
    method: "POST",
    uri: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAHjbhtGrQnSNHas2LvKI2-UOeu0bfT6C0",
  };

  return request(latlngreq) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      console.log("Parsed Response", parsedResponse);
      return {
        lat: parsedResponse.location.lat,
        lng: parsedResponse.location.lng,
      }; // 2
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

getLatLon().then((result) => console.log(result));
