import mongoose from 'mongoose';

//task database schema
const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    create_date: Date,
    complete_date: Date,
    author: String,
    score: Number,
    todo: { type: Boolean, default: false},
    active: { type: Boolean, default: true},
    completed: { type: Boolean, default: false}
});

export default mongoose.model('Task', taskSchema);