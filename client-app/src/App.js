import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login/';
import { Register } from './components/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Router>
    </Layout>
  );
}

export default App;
