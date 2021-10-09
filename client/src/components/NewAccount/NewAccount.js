import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Grid, Typography, Container, TextField } from '@material-ui/core'

const NewAccount = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4">Sign up</Typography>
            <br></br>
            <form>
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item xs={6} md={8}>
                        <TextField name="email" label="Email Address" type="email" required variant="outlined" autoFocus />
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <TextField name="pass_word" label="Password" type="password" required variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <TextField name="pass_word" label="Reenter Password" type="password" required variant="outlined" />
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Button type="submit" variant="contained" color="primary"> Create Account</Button>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Button type="submit" variant="contained" color="primary"> Login Page </Button>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Router>
                            <Link to="/NewUser/CreateAccount" style={{ textDecoration: "none" }}></Link>
                        </Router>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default NewAccount;