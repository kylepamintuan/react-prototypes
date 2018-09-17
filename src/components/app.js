import React from 'react';
import Table from './table';

const students = [
    {name: 'Mike Salvati', course: 'CS112', grade: 80},
    {name: 'Kyle Pamintuan', course: 'CS181', grade: 100},
    {name: 'Perry Tran', course: 'CS101', grade: 50},
    {name: 'Randy Nguyen', course: 'CS111', grade: 60}
];

function App(){
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;
