const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema([
        {
            mealType: { type: String, required: true, enum: ['breakfast', 'lunch', 'dinner', 'snack'] },
            calories: { type: Number, required: true, min: 0},
            carbs: { type: Number, required: true, min: 0},
            protein: { type: Number, required: true, min: 0},
            fat: { type: Number, required: true, min: 0},
            fiber: { type: Number, required: true, min: 0},
            sugar: { type: Number, required: true, min: 0},
        }
    ],
);


module.exports = mongoose.model("meal", mealSchema);