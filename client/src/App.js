import './App.css';
import React, {useState, useEffect } from 'react';
import Nav from './components/NavBar/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import EditTask from './components/EditTask/EditTask';
import Auth from './components/Auth/Auth';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import TaskDetail from './components/TaskDetail/TaskDetail';
import UserProfile from './components/UserProfile/UserProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; /*Allows Routing*/
import { useDispatch } from 'react-redux';
import { getTasks } from './actions/tasks';
import {useHistory} from 'react-router-dom';

const App = () => {
  const [currentId, setCurrentId] = useState(null); //sets the Current task ID 
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const [linkClicked, setlinkClicked] = useState(false);
  

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        <Nav setlinkClicked = {setlinkClicked}/> {/* loads Nav component */}
        <Switch> {/* When you go to this path it will load the component */}
          {/* {linkClicked && alert('Edit was pushed')} */}
          <Route path='/' exact component={Auth}/>
          <Route path='/Dashboard' exact component={Dashboard}><Dashboard setCurrentId={setCurrentId}/></Route>

          {/*This loads the edittask with the wright parameters set */}
          <Route path='/EditTask'  exact component={EditTask}><EditTask currentId={currentId} setCurrentId={setCurrentId} 
                                                              linkClicked={linkClicked} setlinkClicked={setlinkClicked}/></Route>
          
          <Route path='/ScoreBoard'  exact component={ScoreBoard}/>
          <Route path='/TaskDetail' exact component={TaskDetail}/>
          <Route path='/UserProfile' exact component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
