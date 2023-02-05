const express = require("express"); //include express module
const path = require("path"); //path module to use dynamic url address
const app = express();
const port = 3000;

//importing from config
const db = require("./config/mongoose");
//importing from model/mongoose schema
const Contact = require("./models/contact");
//middleware to read urlencoded data

app.use(express.urlencoded()); //body parser
app.use(express.static("assets")); //include static files

/*middleware example
app.use(function (req, res, next) {
  console.log("middleware called");
  next();
  //if  the next is not called ,the control will not be passed to the next route controller
});
*/

//set the default view engine to ejs template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// array of js objects containing the contacts

const arr = [];

//routes
app.get("/", (req, res) => {
  return res.render("home", {
    title: "Home",
    body: "Rendering from EJS Template !!",
  });
});
//displaying contacts

app.get("/contact", (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      console.log("Error in db");
      return;
    }
    return res.render("contact", {
      title: "Contacts Page",
      arr: contacts,
    });
  });
});
//displaying input form page
//managing post route
app.post("/create-entry", (req, res) => {
  if (req.body.name != "" && req.body.phone != "") {
    Contact.create(
      {
        name: req.body.name,
        phone: req.body.phone,
      },
      (err, newContact) => {
        if (err) console.log(err);
      }
    );
  }

  return res.redirect("contact"); //redirecting contact page
});

app.get("/delete-contact/", (req, res) => {
  let id = req.query.id;
  Contact.findByIdAndDelete(id, (err) => {
    if (err) console.log("found error in db");
  });
  res.redirect("back");
});

app.listen(port, () => {
  console.log("the server is up and running on port", port);
});
