import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //maximum days a cookie should live
        httpOnly: true, //prevent xss attacks cross-site scripting attacks (can't use js to hack)
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development" //becomes secure in production and not in development
    }) 
}

export default generateTokenAndSetCookie;