import React, { Component } from 'react';
//import { ControlledCarousel } from '../ControlledCarousel'
import SectionBackground from '../BackgroundSection';
export class Home extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to MyWork!</h1>
        <p>Everything you need in one place.</p>
        <SectionBackground />
      </div>
    )
  }
}