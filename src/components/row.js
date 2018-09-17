import React from 'react';

function Row (props) {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>
        </tr>
    ) 
}

export default Row;