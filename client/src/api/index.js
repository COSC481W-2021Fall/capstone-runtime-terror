import axios from 'axios';
import {URL} from '../credentials/credentials';

const API = axios.create({baseURL:URL});

export const fetchPosts = () => API.get('/posts');  
export const createPost = (newPost) => API.post('/posts', newPost); // 
export const deletePost = (id) => API.delete(`/posts/${id}`);


export const signIn =(formData) => API.post('/user/signin', formData);
export const signUp =(formData) => API.post('/user/signup', formData);
