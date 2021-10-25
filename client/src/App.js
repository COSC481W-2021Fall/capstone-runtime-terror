import './App.css';
import React, {useState } from 'react';
import Nav from './components/NavBar/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import EditTask from './components/EditTask/EditTask';
import Auth from './components/Auth/Auth';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import TaskDetail from './components/TaskDetail/TaskDetail';
import UserProfile from './components/UserProfile/UserProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; /*Allows Routing*/

const App = () => {
  const [currentId, setCurrentId] = useState(0); //sets the Current task ID 

  return (
    <Router>
      <div className="App">
        <Nav /> {/* loads Nav component */}
        <Switch> {/* When you go to this path it will load the component */}
          <Route path='/' exact component={Auth}/>
          <Route path='/Dashboard' exact component={Dashboard}/>

          {/*This loads the edittask with the wright parameters set */}
          <Route path='/EditTask'  exact component={EditTask}><EditTask currentId={currentId} setCurrentId={setCurrentId} /></Route>
          
          <Route path='/ScoreBoard'  exact component={ScoreBoard}/>
          <Route path='/TaskDetail' exact component={TaskDetail}/>
          <Route path='/UserProfile' exact component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
