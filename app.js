const express = require("express"); //requiring express package
const app = express(); //storing it in app, app vanne variable throught out the project use garxam

// '/' ma gayo vane k dekhauney, request vaye paxi response hunai parxa
app.get("/", (req, res) => {
  res.send("<h1>Hey</h1>");
});

// port number -> room number for certain time
app.listen(3000, () => {
  console.log("NodeJs project has started on port 3000");
});
