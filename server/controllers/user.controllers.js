import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {
            $ne: loggedInUserId
        }})//adding this object inside the .find method will lead to function where we can't message ourselves, incase we want to, don't include {$ne: loggedInUserId}

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}