const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema([
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        ingredients: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                unit: {
                    type: String,
                    required: true,
                },
                calories: {
                    type: Number,
                    required: true,
                },
                protein: {
                    type: Number,
                    default: 0,
                },
                carbs: {
                    type: Number,
                    default: 0,
                },
                fats: {
                    type: Number,
                    default: 0,
                },
                fiber: {
                    type: Number,
                    default: 0,
                },
                sugar: {
                    type: Number,
                    default: 0,
                },
                barcode: String,
            },
        ],
        createdAt: {
            type: Date.now,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        }
    },
]);

module.exports = mongoose.model("recipe", recipeSchema);