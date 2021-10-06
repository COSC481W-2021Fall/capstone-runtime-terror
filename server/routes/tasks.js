
import express from 'express';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', auth, createTask);
router.patch('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);



export default router;




