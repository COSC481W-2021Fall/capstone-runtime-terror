import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Mongoose from 'mongoose';
import User from '../models/user.js';



// Authur Mike Muysenberg
export const signin = async (req, res) => { //sign in controller

    const { email, password } = req.body;

    try{

        // Task: Authenticate: Username & password match to the stored user data in the database
        const existingUser = await User.findOne({ email }); //search database for user

        if(!existingUser) return res.status(404).json({ message: "User Doesnt Exist." });   //if email doesnt exist, tell the user 

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);  //check if the password is correct

        if(!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" });     //if password is wrong, tell user

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" }); //instead of test, real applications will use the secret string that only we know. seperate env file where nonone can see it.

        
        // Task: If authentication was successful, send an 'authentication successful' message to user.
        res.status(200).json({ result: existingUser, token }); //return the webtoken and user login successful
    }catch (error){
        res.status(500).json({ message: 'something went wrong.' });
    }

}

//Authur Blake Johnson
export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try{

        const existingUser = await User.findOne({ email }); //search database for user

        if(existingUser) return res.status(400).json({ message: "User already exist." });   //if the user alread exist, tell the user 


        // Task: Checks to see if the password and the confirm password are the same before entering user information
        if(password != confirmPassword) return res.status(400).json({ message: "Passwords don't match." });   //If password and confim password dont match


        // Task: the passwords need to be encrypted/hashed in the database
        const hashedPassword = await bcrypt.hash(password, 12);


        // Task: This will have to grab the information from the front enf UI and store the user informaion into the data base
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });


        //Task: If the user successfully crates a user then they will be re directed to the main page. if not then what ever is wrong will dispaly a warning.
        res.status(200).json({ result, token });

    }catch (error){
        res.status(500).json({ message: 'something went wrong.' });
    }
}


export const updateScore = async (req, res) => {
    const {email: email} = req.params;
    const user = req.body;
        
    const updatedScore = await User.findOneAndUpdate({email}, { score: user.result.score }, {new: true});

    res.json(updatedScore);
}




