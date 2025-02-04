const mongoose = require("mongoose");


const exerciseSchema = new mongoose.Schema (
    {
    exerciseType: String,
    caloriesBurned: Number,
    time: Number,
    intensity: String,
},
);

module.exports = mongoose.model("exercise", exerciseSchema);