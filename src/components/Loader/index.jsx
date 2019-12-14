import React from 'react'
import { Spinner } from 'react-bootstrap';
import './style.css';

const LoaderExampleSizesInverted = () => (
    <div className="center-text ">
        <Spinner className='text-center' animation="border" role="status">
            <span className="sr-only text-center">Loading...</span>
        </Spinner>
        <span> Loading...</span>
    </div>
)

export default LoaderExampleSizesInverted