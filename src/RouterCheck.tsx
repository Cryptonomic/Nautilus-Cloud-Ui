import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import CallBack from './components/CallBack';

const RouterCheck = () => {
  if (localStorage.getItem('userInfo')) {
    return (
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Redirect to='/' push />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/github-callback' component={CallBack} />
        <Redirect to='/' push />
      </Switch>
    );
  }
};

export default RouterCheck;