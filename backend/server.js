//environment setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//express app
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

//database connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.error('Database connection error:', err));

//routes
app.use('/api/exercise', require('./routes/exerciseRoutes'));
app.use('/api/mealPlan', require('./routes/mealPlanRoutes'));
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
    console.log('Server running on http://localhost:${PORT}');
});
