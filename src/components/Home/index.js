import React, { Component } from 'react';
//import { ControlledCarousel } from '../ControlledCarousel'
import SectionBackground from '../BackgroundSection';
import userService from '../../services/userService';
import Tasks from '../Tasks/All'

export class Home extends Component {

  render() {
    return (
      userService.isAuth() ? <Tasks /> : 
      (<div>
        <h1>Welcome to MyWork!</h1>
        <p>Everything you need in one place.</p>
        <SectionBackground />
      </div>)
    )
  }
}