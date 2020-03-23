import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';

// import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/search/:category' component={Search} />
     </Switch>
    </div>
  );
}

export default App;
