const mongoose = require( 'mongoose');

const exerciseSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    discription : {
        type: String,
        trim: true,
        default: ''
    },
    muscleGroup : {
        type: String,
        required: true,
        trim: true,
        enum : ['Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps', 'Legs', 'Abs', 'Cardio', 'Full Body']
    },
    equipment : {
        type: String,
        default: 'Bodyweight'
    },
    videoUrl : {
        type: String,
    },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;