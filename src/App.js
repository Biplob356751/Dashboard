import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Dashboard/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
                <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
