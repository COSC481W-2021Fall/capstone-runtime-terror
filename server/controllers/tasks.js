import TaskMessage from "../models/taskMessage.js";

// Function to get tasks from the database
export const getTasks = async (req, res) => {
    try {
        const taskMessages = await TaskMessage.find();
        res.status(200).json(taskMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}