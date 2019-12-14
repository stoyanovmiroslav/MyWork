/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import './style.css';

import Comments from '../Facebook/Comments';


class Contacts extends Component {
    render() {
        return (
            <Container>
                <br />
                <Row className="show-grid">
                    <Col sm={5}>
                        <div className="h2 text-center text-info">Contacts</div>
                        <div className="shadow py-3 px-3">
                            <strong>MyWorkGroup Ltd.</strong>
                            <div>Sofia, Bulgaria<br /></div>
                            <div>Izgrev, 15-17 Tintyava Street<br /></div>
                            <div>Post code: 1113<br /><br /></div>
                            <div>mywork@gmail.com<br /></div>
                            <div>+44 74385414<br /><br /></div>
                            <a href="mailto:mywork@gmail.com" className="bg-primary btn text-white btn-sm font-weight-bold"><IoIosMail style={{ marginBottom: '3px' }} /> Send email</a>
                        </div>
                    </Col>
                    <Col className="px-0" sm={7}>
                        <iframe className="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.744053587276!2d23.35008831603189!3d42.66677892366794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cca4a719b7%3A0xdf53fcbcd8e758d7!2z0KHQvtGE0YLRg9C10YDQtdC9INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sbg!2sbg!4v1575816521423!5m2!1sbg!2sbg" height="350" frameBorder="0" allowFullScreen>></iframe>
                    </Col>
                </Row>
                <Comments />
            </Container>
        );
    }
}

export default Contacts