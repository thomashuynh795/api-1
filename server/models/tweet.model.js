const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: String, required: true, max: 128, trim: true },
  text: { type: String, required: true, max: 1024 },
  reply: { type: [String] },
  retweet: { type: [String] },
  quoteTweet: { type: [String] },
  like: { type: [String] },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tweet", schema);

