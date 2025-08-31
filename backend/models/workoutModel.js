const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title : {
        type: String,
        required: true,
        trim: true,
    },
    description :{
        type: String,
        trim: true,
        default: ''
    },
    excersises : [{
        exercise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
            required: true,
        },
        sets: {
            type: Number,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        rest: {
            type: Number, // in seconds
            default: 60,
        }
    }],
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;