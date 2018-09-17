import React from 'react';
import Row from './row';

function Table (props) {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Course</th> 
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                { props.data.map((student, index) => <Row id={index} name={student.name} course={student.course} grade={student.grade} />) }
            </tbody>
        </table>
    )
}

export default Table;