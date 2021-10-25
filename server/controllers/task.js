import Task from "../models/task.js";

//create task function
export const createTask = async (req, res) => {
    const { title, description, category, create_date, complete_date, author, score } = req.body;

    const newTask = new Task({ title, description, category, create_date, complete_date, author, score });

    try {
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);
    }
}