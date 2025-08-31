const WorkoutLog = require("../Models/WorkoutLog");
const MealLog = require("../Models/MealLog");

async function createWorkoutLog(userId, logData) {
  const newLog = new WorkoutLog({ ...logData, user: userId });
  await newLog.save();
  return newLog;
}

async function getWorkoutLogForUser(userId) {
  const logs = await WorkoutLog.find({ user: userId })
    .populate("workout", "name")
    .populate("performance.exercise", "name")
    .sort({ date: -1 });
  return logs;
}

async function createMealLog(userId, logData) {
  const newLog = new MealLog({ ...logData, user: userId });
  await newLog.save();
  return newLog;
}

async function getMealLogForUser(userId, date) {
  const filter = { user: userId };
  if (date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    filter.date = { $gte: start, $lte: end };
  }

  const logs = await MealLog.find(filter).sort({ date: -1 });
  return logs;
}

module.exports = {
  createWorkoutLog,
  getWorkoutLogForUser,
  createMealLog,
  getMealLogForUser,
};
