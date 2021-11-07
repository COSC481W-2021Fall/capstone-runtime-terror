import './../../App.css';
//import {useHistory} from 'react-router-dom';

const UserProfile = ({user}) => {
    return(
        user ? (
            <div>
                <h1>User Profile Page</h1>
            </div>
        ) : (window.location.pathname = "/")
    )
}

export default UserProfile;