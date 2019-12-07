import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeCreate from './components/Employee/Create';
//import Main from './components/Main/Main';


// function render(title, Cmp, otherProps) {
//   return function (props) {
//     return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
//   };
// }

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        {/* /<Route path="/register" render={render('Register', Register)} /> */}
        <Route path="/register" component={Register} />
        <Route path='/employee/create' component={EmployeeCreate} />
      </Layout>
    </Router>
  );
}

export default App;
