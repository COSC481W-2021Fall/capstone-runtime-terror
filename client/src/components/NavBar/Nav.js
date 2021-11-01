//The Navigation Bar
import './../../App.css';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Nav = ({setlinkClicked}) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    // const [linkClicked, setlinkClicked] = useState(false);

    const logout =() =>{
        dispatch({type: 'LOGOUT'});
        history.push('/');
        setUser(null);
    };

    const resetEditPage =() =>{
        // alert('link Pushed');
        setlinkClicked(true);
    };

    const reset =() =>{
        // alert('link Pushed');
        setlinkClicked(false);
    };

    useEffect(() =>{
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }


        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token]);

    if (user == null){
        return (    
            <nav className='header'>
                <Typography variant="h3">Runtime Terrors</Typography>
            </nav>
        )
    }else {
        return(
        <nav className='header'>

            <ul> {/* When link is clicked route to='<route_name_from_App.js>' */}

                <Link to='/Dashboard'>
                    <li onClick={reset}>Dashboard</li>
                </Link> 

                <Link to='/EditTask'>
                    <li onClick={resetEditPage}>CreateTask</li>
                </Link>

                <Link to='/ScoreBoard'>
                    <li onClick={reset}>ScoreBoard</li>
                </Link>

                <Link to='/TaskDetail'>
                    <li onClick={reset}>TaskDetail</li>
                </Link>

                <Link to='/UserProfile'>
                    <li onClick={reset}>UserProfile</li>
                </Link>
                
                <Link to='/'>
                    <li onClick={logout}>Logout</li>
                </Link> 
            </ul>
        </nav>
    )}
}

export default Nav;