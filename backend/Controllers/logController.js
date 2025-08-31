const logService = require('../Services/logService');

async function createWorkoutLog(req, res) {
    try{
        const userId = req.user.id;
        const logData = req.body;
        const newLog = await logService.createWorkoutLog(userId, logData);
        res.status(201).json({ message: "Workout log created successfully!", newLog });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

async function getUserWorkoutLogs(req, res) {
    try{
        const userId = req.user.id;
        const logs = await logService.getWorkoutLogForUser(userId);
        res.status(200).json(logs);
    }catch(err){
        res.status(400).json({ error: err.message });
    } 
}

async function createMealLog(req, res) {
    try{
        const userId = req.user.id;
        const logData = req.body;
        const newLog = await logService.createMealLog(userId, logData);
        res.status(201).json({ message: "Meal log created successfully!", newLog });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

async function getUserMealLogs(req, res) {
    try{
        const userId = req.user.id;
        const date = req.query.date; // Optional date filter
        const logs = await logService.getMealLogForUser(userId, date);
        res.status(200).json(logs);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    createWorkoutLog,
    getUserWorkoutLogs,
    createMealLog,
    getUserMealLogs
};