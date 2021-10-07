//The Navigation Bar
import './App.css';

import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className='header'>
            <ul> {/* When link is clicked route to='<route_name_from_App.js>' */}
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/Login'>
                    <li>Login</li>
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
            </ul>
        </nav>
    )
}

export default Nav;