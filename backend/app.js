const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');
const logRoutes = require('./Routes/logRoutes');
const workoutRoutes = require('./Routes/workoutRoutes');

port = config.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/workouts', workoutRoutes);

module.exports = app;