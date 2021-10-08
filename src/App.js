import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Dashboard/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Dashboard/Footer/Footer';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
                <Dashboard></Dashboard>
            </Route>
            <Route path="/addProduct" exact>
                <AddProduct></AddProduct>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
