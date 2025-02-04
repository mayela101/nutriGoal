const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true, 
            unique: true, 
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        authTokens: [String],
        age: {
            type: Number,
            min: 13,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'non-binary', 'other'],
        },
        height: {
            type: Number,
            min: 0,
        },
        weight: {
            type: Number,
            min: 0,
        },
        weightGoal: {
            type: Number,
            min: 0,
        },
        activityLevel: {
            type: String,
            enum: ['sedentary', 'light', 'moderate', 'active', 'very active']
        },
        calorieGoal: {
            type: Number,
            min: 0,
        },
        macroGoals: {
            protein: {
                type: Number,
                min: 0,
            },
            carbs: {
                type: Number,
                min: 0,
            },
            fats: {
                type: Number,
                min: 0,
            },
            fiber: {
                type: Number,
                min: 0,
            },
            sugar: {
                type: Number,
                min: 0,
            },
        },
        favoriteRecipes:[
            {
                type: Schema.Types.ObjectId,
                ref: 'recipe'
            }
        ],
        weightLog: [
            {
                date: {
                    type: Date,
                    default: Date.now,
                },
                weight: Number
            }
        ],
        mealLogs: [
            {
                date: {
                    type: Date,
                    default: Date.now
                },
                meals: [
                    {
                    calories: Number,
                    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
                    macros: {
                        protein: { type: Number, min: 0 },
                        carbs: { type: Number, min: 0 },
                        fats: { type: Number, min: 0 },
                        fiber: { type: Number, min: 0 },
                        sugar: { type: Number, min: 0 },
                    }
                    }
                ],
            }
        ]
    },
);

module.exports = mongoose.model("user", userSchema);