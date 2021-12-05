import mongoose from 'mongoose';

// Database Schema for the user
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    id: { type: String },
    score: { type: Number, default: 0}
})

export default mongoose.model("User", userSchema);