import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import connectDB from './db/connectDB.js'; // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// Connect to the MongoDB database
connectDB();

app.get('/', (req, res) => {
    res.send(`{APPI Running}`);
})

app.use('/api/auth',  authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
