import React from 'react';
import './App.css';
import {DocContainer} from './ containers';
import {ProfileContainer} from './ containers';
import { Header } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <DocContainer/>
      <ProfileContainer/>
    </div>
  );
};

export default App;
