import './App.css';
import Nav from './components/NavBar/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import EditTask from './components/EditTask/EditTask';
import auth from './components/Auth/Auth';
import NewAccount from './components/Auth/Auth';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import TaskDetail from './components/TaskDetail/TaskDetail';
import UserProfile from './components/UserProfile/UserProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; /*Allows Routing*/

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Entire App Component</h1> */}
        <Nav /> {/* loads Nav component */}
        <Switch> {/* When you go to this path it will load the component */}
        {/* <Route path='/' exact component={Login} /> */}
          <Route path='/' exact component={auth} />
          <Route path='/login' component={auth} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/EditTask' component={EditTask} />
          <Route path='/NewAccount' component={NewAccount} />
          <Route path='/ScoreBoard' component={ScoreBoard} />
          <Route path='/TaskDetail' component={TaskDetail} />
          <Route path='/UserProfile' component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
