import {MongoClient} from 'mongodb';
import PostsController from '../controller';

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__);
  db = await connection.db(global.__MONGO_DB_NAME__);
});

afterAll(async () => {
  await connection.close();
  await db.close();
});

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
