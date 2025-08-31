const Workout = require('../models/Workout');

async function createWorkout(userId, workoutData) {
    const newWorkout = new Workout({ ...workoutData, user: userId });
    await newWorkout.save();
    return newWorkout;
};

async function getWorkoutsByUser(userId) {
    const workouts = await Workout.find({ user: userId }).populate('exercises.exercise', 'name muscleGroup');
    return workouts;
}

async function getWorkoutById(workoutId, userId) {
    const workout = await Workout.findById(workoutId).populate('exercises.exercise');
    if (!workout) {
        throw new Error('Workout not found');
    }
    if (workout.user.toString() !== userId) {
        throw new Error('Unauthorized access');
    }
    return workout;
}

async function updateWorkout(workoutId, userId, workoutData) {
    const workout = await Workout.findById(workoutId, userId);

    Object.assign(workout, workoutData);
    await workout.save();
    return workout;
}

async function deleteWorkout(workoutId, userId) {
    const workout = await Workout.findById(workoutId, userId);
    await workout.deleteOne();
    return { message: 'Workout deleted successfully' };
}

module.exports = {
    createWorkout,
    getWorkoutsByUser,
    getWorkoutById,
    updateWorkout,
    deleteWorkout
};