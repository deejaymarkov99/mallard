import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MongoDbMemoryServer from 'mongodb-memory-server';

configure({ adapter: new Adapter() });

const mongodbName = 'mallard-test';

const mongod = new MongoDbMemoryServer.default({

  instance: {
    dbName: mongodbName,
  },

  binary: {
    version: '3.6.4',
  },

});

module.exports = () => {
  global.__MONGOD__ = mongod;
  global.__MONGO_DB_NAME = mongodbName;
}
