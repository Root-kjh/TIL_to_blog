import React from 'react';
import './App.css';
import {DocContainer} from './ containers';
import {ProfileContainer} from './ containers';
import { Header } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/docs/:doc-path">
          <DocContainer/>
        </Route>
        <Route path="/">
          <ProfileContainer/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
