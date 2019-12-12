import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateEmployee from './components/Employee/Create';
import AllEmployees from './components/Employee/All';
import DetailsEmployees from './components/Employee/Details';
import DeleteEmployees from './components/Employee/Delete';
import EditEmployees from './components/Employee/Edit';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import About from './components/About';
import WhyMyWork from './components/WhyMyWork';
import CreateTask from './components/Tasks/Create';
import AllTasks from './components/Tasks/All';
import CreateMeeting from './components/Meetings/Create';
import EditMeeting from './components/Meetings/Edit';
import AllMeetings from './components/Meetings/All';

import NotFound from './components/Errors/NotFound';
import Unauthorized from './components/Errors/Unauthorized';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path="/register" component={Register} />
          <Route path='/employee/create' component={CreateEmployee} />
          <Route path='/employee/all' component={AllEmployees} />
          <Route path='/employee/details/:employeeId' component={DetailsEmployees} />
          <Route path='/employee/delete/:employeeId' component={DeleteEmployees} />
          <Route path='/employee/edit/:employeeId' component={EditEmployees} />
          <Route path='/profile' component={Profile} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path='/whymywork' component={WhyMyWork} />
          <Route path='/task/create' component={CreateTask} />
          <Route path='/tasks' component={AllTasks} />
          <Route path='/meeting/create' component={CreateMeeting} />
          <Route path='/meeting/edit/:meetingId' component={EditMeeting} />
          <Route path='/meetings' component={AllMeetings} />
          <Route path='/unauthorized' component={Unauthorized} />
          <Route path='/notFound' component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App