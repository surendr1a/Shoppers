// mongo.js
const mongoose = require('mongoose');
 
const { MongoClient } = require('mongodb');

 const url = 'your database url for connecting';
// const client = new MongoClient(url);
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error in connecting', error);
    }
}

// connectToDatabase();

module.exports = { connectToDatabase, client };
