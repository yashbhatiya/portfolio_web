// import { MongoClient, Db } from 'mongodb';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// // Get the MongoDB URI from environment variables
// const uri = process.env.MONGODB_URI;
// if (!uri) {
//     throw new Error('MONGODB_URI is not defined in the environment variables');
// }

// // Create a MongoClient instance
// const client = new MongoClient(uri);

// // Variable to hold the database instance
// let db: Db;

// // Function to connect to MongoDB
// export async function connectToDatabase(): Promise<Db> {
//     try {
//         if (db) return db; // Return existing connection if already connected

//         // Connect to MongoDB
//         await client.connect();
//         console.log('Connected to MongoDB Atlas');

//         // Set the database instance
//         db = client.db('mywebsite'); // Use the database name from your URI
//         return db;
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error;
//     }
// }

// // Function to close the MongoDB connection (optional, for cleanup)
// export async function closeDatabaseConnection(): Promise<void> {
//     try {
//         await client.close();
//         console.log('MongoDB connection closed');
//     } catch (error) {
//         console.error('Error closing MongoDB connection:', error);
//         throw error;
//     }
// }