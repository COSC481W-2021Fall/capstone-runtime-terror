//The Navigation Bar
import './../../App.css';
import {Link, useLocation} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Nav = () => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();

    //Logout 
    const logout =() =>{
        dispatch({type: 'LOGOUT'});
        window.location = '/';
        setUser(null);
    };

    useEffect(() =>{
        const token = user?.token;
        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token]);

    //Method to re intilze the Create task after you have clicked update
    function refreshPage() {
        window.location = '/Dashboard';
        window.location.href = '/EditTask';
    }

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
            {/* onClick={refreshPage}  */}
                <Link to='/Dashboard'>
                    <li >Dashboard</li>
                </Link> 

                <Link to = "" onClick={refreshPage}>
                    <li>CreateTask</li>
                </Link>

                <Link to='/ScoreBoard'>
                    <li >ScoreBoard</li>
                </Link>

                <Link to='/TaskDetail'>
                    <li >TaskDetail</li>
                </Link>

                <Link to='/UserProfile'>
                    <li >UserProfile</li>
                </Link>
                
                <Link to='/'>
                    <li onClick={logout}>Logout</li>
                </Link> 
            </ul>
        </nav>
    )}
}

export default Nav;