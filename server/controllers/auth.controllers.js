import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        //line 10 -> 29 is for confirming password, hashing password, checking if same username exists and 
        //giving random profile picture using api
        if(password !== confirmPassword){
            return res.status(400).json({
                error: "Passwords don't match."
            })
        }
        const isUsernameExists = await User.findOne({username});

        if(isUsernameExists){
            return res.status(400).json({
                error: "Username already exists."
            })
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        //33 -> 48 is creating a new user finally and storing it in database
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({        //if success, sends a json response... check postman
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const login = (req, res) => {
    res.send('Login Route');
}
export const logout = (req, res) => {
    res.send('Logout Route');
}