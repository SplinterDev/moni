import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import Test from './components/PieChart/PieChart';
import HomePage from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidenav />
      <main>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
