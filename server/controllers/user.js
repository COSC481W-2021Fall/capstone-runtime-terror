import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';


export const signin = async (req, res) => { //sign in controller

    const { email, password } = req.body;

    try{

        const existingUser = await User.findOne({ email }); //search database for user

        if(!existingUser) return res.status(404).json({ message: "User Doesnt Exist." });   //if email doesnt exist, tell the user 

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);  //check if the password is correct

        if(!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" });     //if password is wrong, tell user

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" }); //instead of test, real applications will use the secret string that only we know. seperate env file where nonone can see it.

        res.status(200).json({ result: existingUser, token }); //return the webtoken and user login successful
    }catch (error){
        res.status(500).json({ message: 'something went wrong.' });
    }

}


//logic for signUp



