//The Navigation Bar
import './../../App.css';

import {Link, useHistory, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
        <nav className='header'>
            <ul> {/* When link is clicked route to='<route_name_from_App.js>' */}
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/Dashboard'>
                    <li>Dashboard</li>
                </Link>

                <Link to='/EditTask'>
                    <li>EditTask</li>
                </Link>

                <Link to='/NewAccount'>
                    <li>NewAccount</li>
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

                <Link to='/Login'>
                    <li onClick={logout}>Logout</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;