




import userRoutes from './routes/users.js';


const app = express();



app.use('/tasks', taskRoutes);
app.use('/user', userRoutes);







