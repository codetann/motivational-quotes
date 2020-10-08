const express = require("express");
const router = express.Router();
const Quotes = require("../quotes");

// Converts the Quotes object to a json file
const data = JSON.stringify(Quotes);

// GET all quotes
router.get("/", (req, res) => {
  res.send(Quotes);
});

// GET single quote through the id paramater
router.get("/:id", (req, res) => {
  const quote = data.find((q) => q.id === parseInt(req.params.id));
  if (quote) {
    res.send(quote);
  } else {
    res.status(404).send("Quote Not Found");
  }
});

// NOT WORKING. NEEDS TO BE FIXED
router.get("/:author", (req, res) => {
  const quote = data.find((q) => q.author === req.params.author);
  console.log(quote);
  if (quote) {
    res.send(quote);
  } else {
    res.status(404).send("Quote Not Found");
  }
});

module.exports = router;
