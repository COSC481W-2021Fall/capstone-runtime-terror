import express from 'express';
import { createTask, getTasks } from '../controllers/tasks.js';

const router = express.Router();
router.get('/get', getTasks);
router.post('/create', createTask);
//router.patch('/:id', updateTask);

export default router;