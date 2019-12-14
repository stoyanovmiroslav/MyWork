import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

export class ControlledCarousel extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i2.wp.com/clark.com/wp-content/uploads/2018/03/workhomepic.jpg?resize=875%2C398&ssl=1/"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Now is the Time</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100"
            src="https://i2.wp.com/clark.com/wp-content/uploads/2018/03/workhomepic.jpg?resize=875%2C398&ssl=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>to Create Your Future</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}