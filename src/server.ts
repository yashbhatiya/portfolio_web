// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import { connectToDatabase } from './lib/mongodb';

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Parse JSON request bodies

// // Connect to MongoDB when the server starts
// let db;
// connectToDatabase()
//     .then(database => {
//         db = database;
//         console.log('Server is ready to handle requests');
//     })
//     .catch(error => {
//         console.error('Failed to connect to MongoDB, server will not start:', error);
//         process.exit(1);
//     });

// // GET endpoint to fetch all users
// app.get('/api/users', async (req: Request, res: Response) => {
//     try {
//         if (!db) throw new Error('Database not connected');
//         const usersCollection = db.collection('users');
//         const users = await usersCollection.find({}).toArray();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users', error });
//     }
// });

// // POST endpoint to add a new user
// app.post('/api/users/add', async (req: Request, res: Response) => {
//     try {
//         if (!db) throw new Error('Database not connected');
//         const userData = req.body;
//         if (!userData.name || !userData.email) {
//             return res.status(400).json({ message: 'Name and email are required' });
//         }
//         const usersCollection = db.collection('users');
//         const result = await usersCollection.insertOne(userData);
//         res.status(201).json({ message: 'User added successfully', userId: result.insertedId });
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding user', error });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });