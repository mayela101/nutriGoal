//environment setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

//express app
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

//database connection
connectDB();

//routes
app.use('/api/exercise', require('./routes/exerciseRoutes'));
app.use('/api/bugdet', require('./routes/budgetRoutes'));
app.use('/api/meal', require('./routes/mealRoutes'));
app.use('/api/recipe', require('./routes/recipeRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

//middleware error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An error occurred', error: err.message });
});

//server intialization
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
