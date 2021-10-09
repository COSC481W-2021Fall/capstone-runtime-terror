import './App.css';
import Nav from './Nav';
import Dashboard from './Dashboard/Dashboard';
import EditTask from './EditTask/EditTask';
import Login from './Login/Login';
import NewAccount from './NewAccount/NewAccount';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import TaskDetail from './TaskDetail/TaskDetail';
import UserProfile from './UserProfile/UserProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; /*Allows Routing*/

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Entire App Component</h1>
        <Nav /> {/* loads Nav component */}
        <Switch> {/* When you go to this path it will load the component */}
          <Route path='/' exact component={Login} />
          <Route path='/login' component={Login} />
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
