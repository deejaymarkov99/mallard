const NodeEnvironment = require('jest-environment-node');

const MongoDbMemoryServer = require('mongodb-memory-server');

const mongodbName = 'mallard-test';

const mongod = new MongoDbMemoryServer.default({
  instance: {
    dbName: mongodbName,
  },

  binary: {
    version: '3.6.4',
  },
});

class MongoEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.__MONGO_URI__ = await mongod.getConnectionString();
    this.global.__MONGO_DB_NAME__ = mongodbName;

    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoEnvironment;
