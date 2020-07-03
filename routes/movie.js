// Route for my favorite movies
var express = require("express");
var router = express.Router();
const movieSchema = require("../models/Movie");

router.post("/", async function (req, res) {
  const movieInfo = await new movieSchema({
    moiveId: req.body.movieId,
    title: req.body.title,
    poster: req.body.poster,
    genre: req.body.genre,
    meta: {
      releaseDate: req.body.releaseDate,
      popularity: req.body.popularity,
    },
  });

  movieInfo.save().then((movieInfo) => res.json(movieInfo));
});

router.get("/", function (req, res) {

})

module.exports = router;
