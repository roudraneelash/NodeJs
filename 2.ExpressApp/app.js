const express = require("express");
const app = express();
const port = 3000;

// respond with "Home Page" when a GET request is made to the homepage
app.get("/", (req, res) => {
  return res.send("Home Page");
});

//different routes
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.listen(port, () => {
  console.log("the server is up and running on port", port);
});
