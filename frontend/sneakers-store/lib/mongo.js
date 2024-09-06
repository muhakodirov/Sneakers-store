// lib/mongodb.js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
// console.log(MONGODB_URI)

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}


async function connectToDatabase() {
    if(mongoose.connections[0].readyState){
        return true;
    }
    try {
        
        await mongoose.connect(MONGODB_URI)
        console.log('Mongodb connected')
        return true
    } catch (error) {
        console.log('Not connected')
    }
  }

export default connectToDatabase;
