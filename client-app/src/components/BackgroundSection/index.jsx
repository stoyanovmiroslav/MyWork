import React, { Component } from 'react';
import Background from '../../static/images/background1.jpeg';


class BackgroundSection extends Component {
  render() {
    const sectionStyle1 = {
      width: "100%",
      height: "500px",
      backgroundImage: `url(${Background})`,
      opacity: 0.7
    };
    
    return (
      <div style={sectionStyle1}>
        {this.props.children}
      </div>
    );
  }
}

export default BackgroundSection