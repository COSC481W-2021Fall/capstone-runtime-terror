import React, { useState } from 'react';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {signin, signup} from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }


const Auth = () => {
    const [showPassword, setShowPassword]= useState(false);
    const [isSignup, setIsSignup]= useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword ((prevShowPassword) => ! prevShowPassword);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history));
        }else{
            dispatch(signin(formData, history));
        }
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => ! prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async(res) =>{
        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch({ type: 'AUTH', data: {result, token}});
            history.push('/');
        }catch (error){
            console.log(error);

        }

    };
    
    const googleFailure = (error) =>{
        console.log(error);
    };



    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4">{isSignup ? 'Sign Up' : 'Login'}</Typography>
            <br></br>

            <form onSubmit={handleSubmit} >
                <Grid container direction="row" alignItems="center" spacing={2}>{

                    isSignup && (
                        <>
                            <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half />
                            <Input name="lastName"  label="Last Name"   handleChange={handleChange}  half />
                        </>
                    )}

                    <Input name="email"    label="Email Address"  handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password"       handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password"  handleChange={handleChange} type="password" />}
                </Grid>
                <Button type="submit" fullWidth varient="contained" color="primary">
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin 
                    clientId="357572993334-i686h49ue0f57sh1lhvcrhgf1fdg906h.apps.googleusercontent.com"
                    render= {(renderProps) => (
                        <Button 
                            fullWidth 
                            varient="contained" 
                            color="primary" 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}>
                                Google Sign In
                        </Button>
                    )}
                    onSuccess = {googleSuccess}
                    onFailure = {googleFailure}
                    cookiePolicy = "single_host_origin"
                />
                <Button fullWidth varient="contained" color="primary" onClick={switchMode}>
                    {isSignup ? 'Back' : 'Create New user'}
                </Button>
            </form>
        </Container>
    );


};

export default Auth;


