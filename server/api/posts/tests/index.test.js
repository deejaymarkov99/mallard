//rspec style of testing
describe('PostsController', () => {
  let res;
  let controller;

  beforeEach(() => {
    controller = new PostsController();
    res = {};
  });

  it ('returns the resource', () => {
    const req = {
      params: {
        id: '123',
      },
    };

    controller.show(req, res);

    expect(res.send).toBeCalledWith({
      id: 123,
      body: "my test fixture body",
    });
  });
});
