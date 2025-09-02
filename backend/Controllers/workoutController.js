const workoutService = require("../Services/workoutServices");

async function createWorkout(req, res) {
  try {
    const userId = req.user.id;
    const workoutData = req.body;
    const newWorkout = await workoutService.createWorkout(userId, workoutData);
    res
      .status(201)
      .json({ message: "Workout created successfully!", newWorkout });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getUserWorkouts(req, res) {
  try {
    const userId = req.user.id;
    const workouts = await workoutService.getWorkoutsByUser(userId);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getWorkoutById(req, res) {
    try{
        const userId = req.user.id;
        const workoutId = req.params.id;
        const workout = await workoutService.getWorkoutById(workoutId, userId);
        res.status(200).json(workout);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}
async function updateWorkout(req, res) {
    try{
        const userId = req.user.id;
        const workoutId = req.params.id;
        const workoutData = req.body;
        const updatedWorkout = await workoutService.updateWorkout(workoutId, userId, workoutData);
        res.status(200).json({message : "Workout updated successfully!", workout : updatedWorkout});
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

async function deleteWorkout(req, res) {
    try{
        const userId = req.user.id;
        const workoutId = req.params.id;
        const result = await workoutService.deleteWorkout(workoutId, userId);
        res.status(200).json(result);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
  createWorkout,
  getUserWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout
};