import express from 'express';
import { signin, signup, updateScore, getUser } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:email', updateScore);
router.post('/get', getUser);

export default router;