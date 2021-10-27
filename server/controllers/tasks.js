import TaskMessage from "../models/taskMessage.js";
import Task from "../models/task.js";

// Function to get tasks from the database
export const getTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find();
        res.status(200).json(taskMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//create task function
export const createTask = async (req, res) => {
    const { title, description, category, create_date, complete_date, author, score } = req.body;

    const newTask = new Task({ title, description, category, create_date, complete_date, author, score });

    try {
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        alert("Task did not insert correctly, please try again.");
    }
}
