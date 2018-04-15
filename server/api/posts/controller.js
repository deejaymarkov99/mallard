const Post = require('./model');

module.exports = class Controller {
  bindRoutes(app) {
    app.get('/api/posts/:id', this.show);
    app.get('/api/posts', this.index);
    app.post('/api/posts', this.create);
    app.put('/api/posts/:id', this.update);
    app.delete('/api/posts/:id', this.delete);
  }

  //get a resource
  async show(req, res) {
    const document = await Post.findById(req.params.id);
    console.log(document);
  }

  //list all resources
  index (req, res) {

  }

  //create a resource
  create (req, res) {

  }

  //update a resource
  update (req, res) {

  }

  //delete a resource
  delete (req, res) {

  }


}
