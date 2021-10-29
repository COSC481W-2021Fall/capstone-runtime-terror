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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const handleSubmit = (e) => {
        const password = formData.password;
        const confirmPassword = formData.confirmPassword;

        const symbol = document.getElementById('symbol');
        const length = document.getElementById('length');
        const confirm = document.getElementById('confirmPassword');

        let messages = [];
        e.preventDefault();
        if (password.length < 8 || password.charAt(0) !== '@') {

            if (password.charAt(0) !== '@') symbol.style.color = 'red';
            else symbol.style.opacity = .25;
            if (password.length < 8) length.style.color = 'red';
            else length.style.opacity = .25;

            messages.push('Password Not good');
            console.log(messages);
        } else {

            if (isSignup) {
                if (password === confirmPassword) {
                    dispatch(signup(formData, history));
                    console.log(formData);
                }
                else{
                    confirm.style.visibility = 'visible';
                }
            } else {
                dispatch(signin(formData, history));
                console.log(formData);
            }
        }
    };


    const handleChange = (e) => {
        const password = formData.password;
        const symbol = document.getElementById('symbol');
        const length = document.getElementById('length');

        if (password.charAt(0) === '@') symbol.style.opacity = .25;
        else { symbol.style.opacity = 1; symbol.style.color = 'black'; }
        if (password.length > 8) length.style.opacity = .25;
        else { length.style.opacity = 1; length.style.color = 'black'; }

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
            history.push('/Dashboard');
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
                    <Typography variant="h4">{isSignup ? 'Sign Up' : 'Login'}</Typography>
                    <br></br>

                    <form onSubmit={handleSubmit} >
                        <Grid container direction="row" alignItems="center" spacing={2}>{

                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}

                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            {!isSignup &&<ul >
                                <li id="incorrect">Password Incorrect</li>
                            </ul>}
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            <ul >
                                <li id="symbol">Password must start with '@'</li>
                                <li id="length">Password needs to be more than 8 charecters</li>
                            </ul>
                            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
                            {isSignup && <ul id = "confirmPassword">
                                <li id="symbol">Password and Confirm Password dont match</li>
                            </ul>}
                        </Grid>
                        <Button className={classes.buttonSubmit}  variant="contained" color="primary" size="large" type="submit" fullWidth>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
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


