import React, { useState } from 'react';
import { Button, Grid, Typography, Container, Paper } from '@material-ui/core';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signin, signup } from '../../actions/auth';
import './auth.css';
import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        const password = formData.password;
        const confirmPassword = formData.confirmPassword;
        const symbol = document.getElementById('symbol');
        const length = document.getElementById('length');
        const Capital = document.getElementById('Capital');
        const Lower = document.getElementById('Lower');
        const Number = document.getElementById('Number');
        const confirm = document.getElementById('confirm');

        e.preventDefault();
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {

            if (isSignup) {
                if (password === confirmPassword) 
                    dispatch(signup(formData, history));
                else
                    confirm.style.visibility = 'visible';
            } else 
                dispatch(signin(formData, history));
        } 

        //lowercase check
        if (!/.*[a-z].*/.test(password)) Lower.style.color = 'red';
        else Lower.style.color = 'black';
        // uppercase check
        if (!/.*[A-Z].*/.test(password)) Capital.style.color = 'red';
        else Capital.style.color = 'black';
        // number check 
        if (!/.*\d.*/.test(password)) Number.style.color = 'red';
        else Number.style.color = 'black';
        // special char check
        if (!/[@$!%*?&]/.test(password)) symbol.style.color = 'red';
        else symbol.style.color = 'black';
        // length check
        if (!(password.length > 8)) length.style.color = 'red';
        else length.style.color = 'black';
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            window.location = '/Dashboard';
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }

    };

    const googleFailure = (error) => {
        console.log(error);
    };



    return ( 
        !user ? (
            <div>
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>

                    {/* Title */}
                    <Typography variant="h4">{isSignup ? 'Sign Up' : 'Login'}</Typography>
                    <br></br>

                    <form onSubmit={handleSubmit} >
                        <Grid container direction="row" alignItems="center" spacing={2}>{

                            // Checking to see what form is currently being displayed
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}

                            {/* Email */}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            {!isSignup &&
                                <Paper id = "wrongPassword">
                                        <li id="incorrect">Password Incorrect</li>
                                </Paper>
                            }

                            {/* Password */}
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            <Paper id = "passwordrules">
                                {/* <ul > */}
                                    <li id="symbol">A Special Charecter (@$!%*?&)</li>
                                    <li id="Capital">At Least One Capital Letter </li>
                                    <li id="Lower">At Least One Lowercase Letter</li>
                                    <li id="Number">At Least One Number</li>
                                    <li id="length">Needs to be longer than 8 charecters</li>
                                {/* </ul> */}
                            </Paper>
                            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
                            {isSignup && <ul id = "confirmPassword">
                                <li id="symbol">Password and Confirm Password dont match</li>
                            </ul>}
                        </Grid>
                        <Button className={classes.buttonSubmit}  variant="contained" color="primary" size="large" type="submit" fullWidth>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>

                        {/* Google sign in button 
                        TODO: Make it work on server - Blake Johnson*/}
                        <GoogleLogin
                            clientId="357572993334-i686h49ue0f57sh1lhvcrhgf1fdg906h.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    className={classes.buttonSubmit}  
                                    variant="contained" 
                                    color="primary" 
                                    size="large" 
                                    type="submit" 
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Button className={classes.buttonSubmit}  variant="contained" color="secondary" size="small" type="submit" fullWidth onClick={switchMode}>
                            {isSignup ? 'Back' : 'Create New user'}
                        </Button>
                    </form>
                    </Paper>
                </Container>
            </div>) : (
                <div>
                    {history.push('./Dashboard')}
                </div>  )
    );
}
export default Auth;


