const Mongoose = require('mongoose');

const postSchema = new Mongoose.Schema({
  body: String,
});

const postModel = Mongoose.model('Post', postSchema);

module.exports = postModel
