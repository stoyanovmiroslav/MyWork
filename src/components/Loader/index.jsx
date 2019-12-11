import React from 'react'
import { Spinner } from 'react-bootstrap';

const LoaderExampleSizesInverted = () => (
    <div className="text-center">

        {/* //<Image className src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
        <Spinner className='text-center' animation="border" role="status">
            <span className="sr-only text-center">Loading...</span>
        </Spinner>
    </div>
)

export default LoaderExampleSizesInverted