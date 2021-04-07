import React from 'react';
import './App.css';
import {DocContainer} from './ containers';
import {ProfileContainer} from './ containers';
import { Header } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/docs" component={DocContainer}/>
          <Route path="/" component={ProfileContainer}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
