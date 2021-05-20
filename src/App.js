import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Products from './pages/Products';
import Reports from './pages/Reports';

class App extends React.Component{
  render(){
    return(
      <div> 
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/reports' component={Reports} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
