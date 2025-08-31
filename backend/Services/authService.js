const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET_KEY } = require('../config');
const e = require('cors');

async function registerUser(username, email, password) {
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error('Email already in use');
    }

    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);
    const newUser = new User({username, email, password: hashedPassword});
    await newUser.save();
    return newUser;
}

async function loginUser(email, password) {
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('Invalid email');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }
    const payLoad = {
        userId: user._id,
        email: user.email
    };
    const token = jwt.sign(payLoad, JWT_SECRET_KEY, {expiresIn: '1d'});
    
    return { token, user : {
        id: user._id,
        username: user.username,
        email: user.email
    } };
}

module.exports = {
    registerUser,
    loginUser
};
