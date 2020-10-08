const express = require("express");
const router = express.Router();
const Quotes = require("../quotes");

router.get("/", (req, res) => {
  res.send(Quotes);
});

router.get("/:id", (req, res) => {
  const quote = Quotes.find((q) => q.id === parseInt(req.params.id));
  if (quote) {
    res.send(quote);
  } else {
    res.status(404).send("Quote Not Found");
  }
});

router.get("/:author", (req, res) => {
  const quote = Quotes.find((q) => q.author === req.params.author);
  console.log(quote);
  if (quote) {
    res.send(quote);
  } else {
    res.status(404).send("Quote Not Found");
  }
});

module.exports = router;
