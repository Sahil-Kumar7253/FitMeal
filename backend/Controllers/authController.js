const authService = require('../Services/authService');

async function register(req, res) {
    try{
        const { username, email, password } = req.body;
        const newUser = await authService.registerUser(username, email, password);
        res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    }
    catch(err){
        res.status(400).json({ error: err.message });
    } 
};

async function login(req, res) {
    try{
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.status(200).json(result);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    register,
    login
};