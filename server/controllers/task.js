import Task from "../models/task.js";

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


//update task function backend