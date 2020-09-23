const express = require("express");
const getCircularPlace = require('./circularPlace')
const getCircularTweet = require('./circularTweet');

app = express(),
  port = 5000,
  cors = require("cors");

app.use(cors());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

app.post("/rectangular_coordinates", (req, res) => {

})

app.post("/circular_coordinates", (req, res) => {
  switch (req.body.sourceType) {
    case 'google_place':
      getCircularPlace(req.body.point.lat, req.body.point.lng, req.body.radius, req.body.queryParam)
        .then(data => {
          console.log(data)
          res.send(data);
        });
      break;
    case 'tweet':
      getCircularTweet(req.body.point.lat, req.body.point.lng, req.body.radius, req.body.queryParam).
        then(data => {
          res.send(data);
        });
      break;
  }
})

app.post("/polygon_coordinates", (req, res) => {

})

