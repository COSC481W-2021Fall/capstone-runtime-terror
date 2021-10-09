import React, { useState } from 'react';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';


// const initialState = { firstName: '', lastName: '', email: '', pass_word: '', confirmPassword: '' }


const Auth = () => {
    const [showPassword, setShowPassword]= useState(false);
    const [isSignup, setIsSignup]= useState(false);
    const dispatch = useDispatch;


    const handleShowPassword = (e) => setShowPassword ((prevShowPassword) => ! prevShowPassword);


    const handleSubmit = (e) => {

    };

    const handleChange = (e) => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => ! prevIsSignup);
        handleShowPassword(false);
    };
    const googleSuccess = async(res) =>{
        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch({ type: 'AUTH', dats: {result, token}});
        }catch (error){
            console.log(error);

        }

    };
    const googleFailure = (error) =>{
        console.log(error);
    };



    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4">Login</Typography>
            <br></br>

            <form onSubmit={handleSubmit} >
                <Grid container direction="row" alignItems="center" spacing={2}>{

                    isSignup && (
                        <>
                            <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half />
                            <Input name="firstName" label="First Name"  handleChange={handleChange}  half />
                        </>
                    )}

                    <Input name="email" label="Email Address"  handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password"  handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
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


