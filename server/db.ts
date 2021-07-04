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
  let dbUrl = "";
  if (process.env.NODE_ENV !== "production") {
    const mongod = new MongoMemoryServer(getMongodbMemoryOptions());
    await mongod.start();
    dbUrl = await mongod.getConnectionString();
  }
  const connection = await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  return connection;
};
