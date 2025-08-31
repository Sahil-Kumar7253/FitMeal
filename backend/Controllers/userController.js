const userService = require('../Services/userService');

async function getProfile(req, res) {
    try{
        const userId = req.user.id;
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

async function updateProfile(req, res) {
    try{
        const userId = req.user.id;
        const profileData = req.body;
        const updatedUser = await userService.updateUserProfile(userId, profileData);
        res.status(200).json({message : "Profile updated successfully!",user : updatedUser});
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getProfile,
    updateProfile
}; 