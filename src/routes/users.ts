// import express, { Router, Request, Response } from 'express';
// import { connectToDatabase } from '../lib/mongodb';

// const router: Router = express.Router();

// // POST endpoint to add a new user
// router.post('/add', async (req: Request, res: Response) => {
//     try {
//         const db = await connectToDatabase();
//         const usersCollection = db.collection('users');

//         // Example user data from the request body
//         const userData = req.body;

//         // Insert the user into the collection
//         const result = await usersCollection.insertOne(userData);
//         res.status(201).json({ message: 'User added successfully', userId: result.insertedId });
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding user', error });
//     }
// });

// // GET endpoint to fetch all users
// router.get('/', async (req: Request, res: Response) => {
//     try {
//         const db = await connectToDatabase();
//         const usersCollection = db.collection('users');

//         // Fetch all users
//         const users = await usersCollection.find({}).toArray();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users', error });
//     }
// });

// export default router;