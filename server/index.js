// eslint-ignore no-consolee
const assert = require('assert');

const Express = require('express');
const Morgan = require('morgan');

const MongoClient = require('mongodb').MongoClient;


const PostsController = require('./api/posts').controller;

const mongoDbUrl = `mongodb://localhost:27017/mallard-${process.env.NODE_ENV}`;

MongoClient.connect(mongoDbUrl, (err, db) => {
  assert.equal(null,err);
  assert.ok(db != null);

  db.close();
});

const app = new Express();

app.use(Morgan("tiny"));

const postsController = new PostsController();
postsController.bindRoutes(app);

app.use(Express.static('dist'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
