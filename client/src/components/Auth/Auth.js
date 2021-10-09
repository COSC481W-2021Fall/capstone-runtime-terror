
import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockedOutLinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', pass_word: '', confirmPassword: ''}


const Auth = () =>{


    const [formData, setFormData] = useState(initialState);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData, history))
        }
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }


}