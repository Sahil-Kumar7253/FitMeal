const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');

port = config.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;