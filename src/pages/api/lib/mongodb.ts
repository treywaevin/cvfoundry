import { MongoClient, MongoClientOptions } from 'mongodb';

const uri: string | undefined = process.env.MONGODB_URI;
const options: MongoClientOptions = {};
let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

declare global {
  // Ensures the global object has a `_mongoClientPromise` property in development
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
