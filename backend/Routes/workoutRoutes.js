const express = require('express');
const router = express.Router();
const workoutController = require('../Controllers/workoutController');
const authMiddleware = require('../Middleware/authMiddleware');

router.use(authMiddleware);

router.post('/', workoutController.createWorkout);
router.get('/', workoutController.getUserWorkouts);
router.get('/:id', workoutController.getWorkoutById);
router.put('/:id', workoutController.updateWorkout);
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;