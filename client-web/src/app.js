import React, { Component } from 'react';
import './app.css';
import { Header } from './common/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import login from './components/login';
import register from './components/register';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
      </div>
    );
  }
}

const AppRouter = () => {
  return (
    <Router>
      <App/>
    </Router>
  )
};

export default AppRouter;
