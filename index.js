const express = require("express");
const app = express();
const quoteRouter = require("./routes/quote-route");
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use("/quotes", quoteRouter);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
