const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
    {
        budgetCal: {
            type: Number,
            required: true,
            min: 0,
        },
        budgetProt: {
            type: Number,
            required: true,
            min: 0,
        },
        budgetCarb: {
            type: Number,
            required: true,
            min: 0,
        },
        budgetFats: {
            type: Number,
            required: true,
            min: 0,
        },

    },
);

module.exports = mongoose.model("budget", budgetSchema);