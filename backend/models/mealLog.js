const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    mealType: {
        type: String,
        required: true,
        enum : ['Breakfast', 'Lunch', 'Dinner', 'Snack']
    },
    foodItems : [{
        name: {
            type: String,
            required: true
        },
        calories: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },
        carbs: {
            type: Number,
            required: true
        },
        fat: {
            type: Number,
            required: true
        }
    }]
}, { timestamps: true });

const MealLog = mongoose.model('MealLog', workoutLogSchema);
module.exports = MealLog;