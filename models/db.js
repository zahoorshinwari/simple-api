// models/db.js
const { MongoClient } = require('mongodb');

const mongoUri = 'mongodb+srv://khanzshinwari5371:XK4nYA2ok8M1Imnz@authentication.jhj9h.mongodb.net/?retryWrites=true&w=majority&appName=authentication'


const dbName = 'authentication';

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
