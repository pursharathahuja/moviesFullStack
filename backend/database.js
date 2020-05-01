import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import {loadUsers, removeFavourites} from './seedData';

dotenv.config();

// Connect to database

mongoose.connect(process.env.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`database connection error: ${err}`);
});
db.on('disconnected', () => {
    console.log('database disconnected');
});
db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
    if (process.env.NODE_ENV === 'development') {
        // loadUsers();
    }
})