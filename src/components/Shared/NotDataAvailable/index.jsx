import React from 'react';
import './style.css';

import { Container } from 'react-bootstrap';

const NotDataAvailable = () => {

    return (
        <Container className="center-text font-weight-bold">
            <div>No data available!</div>
        </Container>
    )
}

export default NotDataAvailable