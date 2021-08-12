import mongoose from "mongoose";
// @ts-ignore
import { MongoMemoryServer } from "mongodb-memory-server";

function getMongodbMemoryOptions() {
  return {
    binary: {
      version: "4.0.3",
      skipMD5: true,
    },
    instance: {
      dbName: "puzzl",
    },
    autoStart: false,
  };
}

export const setupDatabase = async () => {
  console.log('DATABASE IS SETTING UP');
  let dbUrl = "";
  const mongod = new MongoMemoryServer(getMongodbMemoryOptions());
  await mongod.start();
  dbUrl = mongod.getUri();
  const connection = await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log('DATABASE IS SET UP');
  return connection;
};
