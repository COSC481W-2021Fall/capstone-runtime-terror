import express from 'express';
import { createTask, getTasks, updateTask, deleteTask} from '../controllers/tasks.js';

const router = express.Router();
router.post('/get', getTasks);
router.post('/create', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
