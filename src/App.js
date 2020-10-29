import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>sidenav</nav>
      <Switch>
        <main>
          <Route exact path={'/'} component={HomePage} />
        </main>
      </Switch>
    </div>
  );
}

export default App;
