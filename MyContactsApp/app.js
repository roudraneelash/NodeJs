const express = require("express"); //include express module
const path = require("path"); //path module to use dynamic url address
const app = express();
const port = 3000;

//set the default view engine to ejs template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/ejs", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("the server is up and running on port", port);
});
