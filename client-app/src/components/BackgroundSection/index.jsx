import React, { Component } from 'react';
import Background from '../../static/images/background1.jpeg';


class BackgroundSection extends Component {
  render() {
    const sectionStyle = {
      width: "100%",
      height: "500px",
      backgroundImage: `url(${Background})`,
      opacity: 0.7
    };
    
    return (
      <div style={sectionStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default BackgroundSection