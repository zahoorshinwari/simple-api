// models/db.js
const { MongoClient } = require('mongodb');

const mongoUri = process.env.MONGODB_URI;
const dbName = 'yourDatabaseName';

let db;

// Connect to MongoDB and export the database instance
const connectToDb = async () => {
  if (!db) {
    const client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  }
  return db;
};

module.exports = { connectToDb };
