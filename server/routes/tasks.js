import express from 'express';
import { createTask, getTasks } from '../controllers/tasks.js';

const router = express.Router();
router.get('/', getTasks);
router.post('/', createTask);
//router.patch('/:id', updaateTask);

export default router;