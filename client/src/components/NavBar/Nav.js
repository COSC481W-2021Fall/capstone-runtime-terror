//The Navigation Bar
import './../../App.css';

import {Link, useHistory, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

function Nav() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout =() =>{
        dispatch({type: 'LOGOUT'});
        history.push('/');
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

    return(
        <nav className='header'>

            <ul> {/* When link is clicked route to='<route_name_from_App.js>' */}

                <Link to='/Dashboard'>
                    <li>Dashboard</li>
                </Link> 

                <Link to='/EditTask'>
                    <li>EditTask</li>
                </Link>

                <Link to='/ScoreBoard'>
                    <li>ScoreBoard</li>
                </Link>

                <Link to='/TaskDetail'>
                    <li>TaskDetail</li>
                </Link>

                <Link to='/UserProfile'>
                    <li>UserProfile</li>
                </Link>

                <Link to='/'>
                    <li onClick={logout}>Logout</li>
                </Link> 
                
            </ul>
        </nav>
    )
}

export default Nav;