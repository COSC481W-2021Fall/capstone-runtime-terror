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

const App = () => {
  const [currentId, setCurrentId] = useState(null); //sets the Current task ID 
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    if(user)
      dispatch(getTasks({user}));
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        <Nav/> {/* loads Nav component */}
        <Switch> {/* When you go to this path it will load the component */}
          {/* {linkClicked && alert('Edit was pushed')} */}
          <Route path='/' exact component={Auth}/>
          <Route path='/Dashboard'><Dashboard setCurrentId={setCurrentId} user={user}/></Route>
          <Route path='/EditTask'><EditTask currentId={currentId} setCurrentId={setCurrentId} user={user}/></Route>
          <Route path='/ScoreBoard'><ScoreBoard setCurrentId={setCurrentId} user={user}/></Route>
          <Route path='/TaskDetail'><TaskDetail setCurrentId={setCurrentId} user={user}/></Route>
          <Route path='/UserProfile'><UserProfile setCurrentId={setCurrentId} user={user}/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
