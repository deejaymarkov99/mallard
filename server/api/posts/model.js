const Mongoose = require('mongoose');
const Schema = Mongoose.schema;

const postSchema = new Schema({
  body: String,
});

const postModel = Mongoose.model('Post', postSchema);

module.exports = postModel
