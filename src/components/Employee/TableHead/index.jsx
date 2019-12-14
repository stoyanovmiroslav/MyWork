import React, {Fragment} from 'react';

const TableHead = (props) => {

    return (
        <Fragment>
            <thead>
                <tr>
                    {props.headers.map((value, index) => (<th key={index}>{value}</th>))}
                </tr>
            </thead >
        </Fragment>
    )
}

export default TableHead