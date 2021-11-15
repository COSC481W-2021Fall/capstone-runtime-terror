import axios from 'axios';
import {URL} from '../credentials/credentials';

const API = axios.create({baseURL:URL});
 
//Task Manipulation 
export const getTasks = (user) => API.post('/tasks/get', user); 
export const createTask = (newTask) => API.post('/tasks/create', newTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const updateTask = (id, updateTask) => API.patch(`/tasks/${id}`, updateTask);

//Account Manipulation
export const signIn =(formData) => API.post('/user/signin', formData);
export const signUp =(formData) => API.post('/user/signup', formData);
