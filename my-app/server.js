const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");

// Create a new Express app
const app = express();

// Define middleware that validates incoming bearer access token JWTs
const checkJwt = auth({
  issuerBaseURL: "https://archer-generic0.demo-platform.auth0app.com",
  audience: "https://expressvuespa/api"
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Start the app
app.listen(3001, () => console.log('API listening on 3001'));