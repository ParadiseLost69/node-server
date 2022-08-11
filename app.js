const express = require("express");

//express app

const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<p> home page </p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 for Middleware

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});