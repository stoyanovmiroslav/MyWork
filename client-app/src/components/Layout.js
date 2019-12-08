import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavMenu from './NavMenu';
//import SectionBackground from './Section';
import { VerticalNavMenu } from './VerticalNavMenu';
import Footer from './Footer';

export class Layout extends Component {
  render() {
    return (
      <Container>
        <NavMenu />
        <Row className="show-grid">
          <Col sm={3}>
            <VerticalNavMenu />
          </Col>
          <Col className='pl-0' sm={9}>
            {this.props.children}
          </Col>
          <Footer />
        </Row>
      </Container>
    );
  }
}
