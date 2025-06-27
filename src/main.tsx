import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import express from 'express';
//import userRoutes from './routes/users';


//const app = express();


// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use the user routes
// app.use('/api/users', userRoutes);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

createRoot(document.getElementById("root")!).render(<App />);
