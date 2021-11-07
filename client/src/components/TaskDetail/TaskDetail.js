import './../../App.css';
//import {useHistory} from 'react-router-dom';

const TaskDetail = ({user}) => {
    return(
        user ? (
            <div>
                <h1>Task Detail Page</h1>
            </div>
        ) : (window.location.pathname = "/")
    )
}

export default TaskDetail;