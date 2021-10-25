import mongoose from 'mongoose';

//task database schema
const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    create_date: Date,
    complete_date: Date,
    author: String,
    score: String
});

export default mongoose.model('Task', taskSchema);