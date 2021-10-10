import axios from 'axios';
import {URL} from '../credentials/cerdentials';

const API = axios.create({baseURL:URL});

export const signIn =(formData) => API.post('/user/signin', formData);
export const signUp =(formData) => API.post('/user/signup', formData);
