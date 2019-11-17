import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { VerticalNavMenu } from './VerticalNavMenu';

export class Layout extends Component {

  render() {
    return (
      <Container>
        <NavMenu />
        <Row className="show-grid">
          <Col sm={3}>
            <VerticalNavMenu />
          </Col>
          <Col sm={8}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
