const express = require('express');
const router = express.Router();
const logController = require('../Controllers/logController');
const authMiddleware = require('../Middleware/authMiddleware');
router.use(authMiddleware);

router.post("/workout", logController.createWorkoutLog);
router.get("/workouts", logController.getUserWorkoutLogs);

router.get("/meal", logController.getUserMealLogs);
router.post("/meal", logController.createMealLog);

module.exports = router;