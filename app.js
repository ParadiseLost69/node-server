const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<p> home page </p>");
  const blogs = [
    { title: "Yoshi finds eggs", snippet: " lorem ipsum dolor sit amet" },
    {
      title: "Mario finds a star",
      snippet: " Mario did it. The mad lad. I can't believe it.",
    },
    {
      title: "Birdo is the best",
      snippet: "All hail our supreme overlord and sexual icon Birdo.",
    },
  ];
  res.render("index", { title: "Ninja", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//404 for Middleware

app.use((req, res) => {
  res.status(404).render("404", { title: "Error" });
});
