const { response } = require('express');
const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        trim: true,
        default: ''
    },
    performance: [{
        exercise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
            required: true  
        },
        sets : [{
            reps : {type: Number, required: true},
            weight : {type: Number, required: true},
        }]
    }]
}, { timestamps: true });

const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema);
module.exports = WorkoutLog;