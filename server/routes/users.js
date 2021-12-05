import express from 'express';
import { signin, signup, updateScore } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:email', updateScore);

export default router;