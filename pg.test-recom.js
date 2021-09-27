const { client } = require("./pg.client");

function testRecom1() {
  client
    .elevation({
      params: {
        locations: [{ lat: 45, lng: -110 }],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
      console.log(r.data.results[0].elevation);
    })
    .catch((e) => {
      console.log(e.response.data.error_message);
    });
}

module.exports = {
  testRecom1,
};

// You can add more functions in here to do more tests
