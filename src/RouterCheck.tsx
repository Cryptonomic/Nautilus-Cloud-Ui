import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import CallBack from './components/CallBack';

const RouterCheck = () => {
  return (
    <Switch>
      <Route
        path='/home'
        render={() => {
          const userStringInfo = localStorage.getItem('userInfo');
          return userStringInfo ? <Home /> : <Redirect to='/' />;
        }}
      />
      <Route
        path='/github-callback'
        render={() => {
          const userStringInfo = localStorage.getItem('userInfo');
          return userStringInfo ? <Redirect to='/home' /> : <CallBack />;
        }}
      />
      <Route
        exact
        path='/'
        render={() => {
          const userStringInfo = localStorage.getItem('userInfo');
          return userStringInfo ? <Redirect to='/home' /> : <App />;
        }}
      />
      <Redirect to='/' push />
    </Switch>
  );
};

export default RouterCheck;