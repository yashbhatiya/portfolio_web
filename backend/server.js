import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Unified Contact Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    subject: {
        type: String,
        required: true,
        enum: ['Project Inquiry', 'Collaboration', 'Job Opportunity', 'General Question', 'Other'],
        default: 'General Question'
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Single Model for all contact forms
const Contact = mongoose.model('Contact', contactSchema);

// API Routes
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message,
            subject: 'General Question' // Default subject
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (err) {
        console.error("Error saving contact:", err);

        let errorMessage = "Failed to send message. Please try again later.";
        if (err.name === 'ValidationError') {
            errorMessage = Object.values(err.errors).map(e => e.message).join(', ');
        }

        res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
});

app.post('/pagecontact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // Validate subject
        const validSubjects = ['Project Inquiry', 'Collaboration', 'Job Opportunity', 'General Question', 'Other'];
        if (!validSubjects.includes(subject)) {
            return res.status(400).json({
                success: false,
                message: "Invalid subject selected"
            });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (err) {
        console.error("Error saving contact:", err);

        let errorMessage = "Failed to send message. Please try again later.";
        if (err.name === 'ValidationError') {
            errorMessage = Object.values(err.errors).map(e => e.message).join(', ');
        }

        res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));