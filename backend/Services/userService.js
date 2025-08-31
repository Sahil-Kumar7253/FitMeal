const User = require('../models/userModel');

async function getUserById(userId) {
    const user = await User.findById(userId).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

async function updateUserProfile(userId, profileData) {
    const {password, ...otherData} = profileData;

    const user = await User.findByIdAndUpdate(userId, otherData, {new: true}).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

module.exports = {
    getUserById,
    updateUserProfile
};