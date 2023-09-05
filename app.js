const express = require("express"); //requiring express package
const app = express(); //storing it in app, app vanne variable throught out the project use garxam

// ejs use garna aateko su, k k chainey ho env set gardey
app.set("view engine", "ejs");

// '/' ma gayo vane k dekhauney, request vaye paxi response hunai parxa
app.get("/", (req, res) => {
  // res.send("<h1>Hey</h1>");
  res.render("home.ejs", { name: "Dipesh" }); //vies bhitra ko file render garxa
});

app.get("/about", (req, res) => {
  res.render("about"); //vies bhitra ko file render garxa
});

// port number -> room number for certain time
app.listen(3000, () => {
  console.log("NodeJs project has started on port 3000");
});
