import axios from 'axios';
import {URL} from '../credentials/credentials';

const API = axios.create({baseURL:URL});

export const fetchTasks = () => API.get('/tasks');  
export const createTask = (newTask) => API.post('/tasks', newTask);  
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const updateTask = (id, updateTask) => API.patch(`/tasks/${id}`, updateTask);


export const signIn =(formData) => API.post('/user/signin', formData);
export const signUp =(formData) => API.post('/user/signup', formData);
export const getTasks = () => API.get('/dashboard');