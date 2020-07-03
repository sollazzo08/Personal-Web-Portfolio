const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = mongoose.Schema({
  movieId: Number,
  title: String,
  poster: String,
  genre: String,
  meta: {
    releaseDate: Number,
    popularity: Number
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
