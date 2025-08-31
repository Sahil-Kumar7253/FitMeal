const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');

port = config.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/auth', authRoutes);

module.exports = app;