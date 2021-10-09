import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import {CONNECTION_URL, PORT} from './credentials/credentials.js'
import userRoutes from './routes/users.js';
// import taskRoutes from './routes/tasks';

const app = express();

// app.use('/tasks', taskRoutes);
app.use('/user', userRoutes);
app.use(cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose;








