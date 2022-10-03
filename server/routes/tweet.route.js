const express = require("express");
const router = express.Router();
const Tweet = require("../models/tweet.model");

/* CREATE */
router.post("/", async (request, response) => {
  const tweet = await new Tweet({
    username: request.body.username,
    text: request.body.text
  });
  tweet
    .save()
    .then(data => response.json(data))
    .catch(error => response.json({ message: error }));
});

/* READ ALL */
router.get("/", async (request, response) => {
  try {
    const tweets = await Tweet.find();
    response.json(tweets);
  } catch (error) {
    response.json({ message: error });
  }
});

/* READ */
router.get("/:id", async (request, response) => {
  try {
    const tweet = await Tweet.findById(request.params.id);
    response.json(tweet);
  } catch (error) {
    response.json({ message: error });
  }
});

/* UPDATE */
router.patch("/:id", async (request, response) => {
  try {
    const tweet = await Tweet.updateOne(
      { _id: request.params.id },
      {
        $set: {
          username: request.body.username,
          text: request.body.text,
          reply: request.body.reply,
          retweet: request.body.retweet,
          quoteTweet: request.body.quoteTweet,
          like: request.body.like,
          creationDate: request.body.creationDate
        }
      }
    );
    response.json(tweet);
  } catch (error) {
    response.json({ message: error });
  }
});

/* DELETE */
router.delete("/:id", async (request, response) => {
  try {
    const tweet = await Tweet.remove({ _id: request.params.id });
    response.json(tweet);
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;
