import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';
import ShowSelected from './components/ShowSelected';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Login} />
      <Switch>
        <Route exact path='/register' component={SignUp} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/selected' component={ShowSelected} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
