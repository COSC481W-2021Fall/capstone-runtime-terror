import './../../App.css';
//import {useHistory} from 'react-router-dom';

const ScoreBoard = ({user}) => {
    return(
        user ? (
            <div>
                <h1>ScoreBoard Page</h1>
            </div>
        ) : (window.location.pathname = "/")
    )
}

export default ScoreBoard;