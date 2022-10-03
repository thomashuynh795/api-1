// ---------------------------------------------------------------------------|
// IMPORT MODULES
// ---------------------------------------------------------------------------|

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// ---------------------------------------------------------------------------|
// SET ENVIRONMENT VARIABLES
// ---------------------------------------------------------------------------|

require("dotenv").config({ path: "./.env.local" });
const PORT = process.env.PORT;
const URI = process.env.URI;

// ---------------------------------------------------------------------------|
// MIDDLEWARES
// ---------------------------------------------------------------------------|

const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

// ---------------------------------------------------------------------------|
// SET ROUTES
// ---------------------------------------------------------------------------|

const tweetRoute = require("./routes/tweet.route");
app.use("/tweet", tweetRoute);

// ---------------------------------------------------------------------------|
// CONNECT TO DATABASE
// ---------------------------------------------------------------------------|

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("MongoDB connected."))
  .catch(error => console.log("Connexion to MongoDB failed", error));

// ---------------------------------------------------------------------------|
// LISTEN SERVER
// ---------------------------------------------------------------------------|

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + ".");
});

