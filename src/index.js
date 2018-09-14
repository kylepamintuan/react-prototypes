import React from 'react';
import ReactDOM from 'react-dom';

let mike = { name: 'Mike Salvati', luckyNum: luckyNumber() };
const element = <Greeting user={mike}/>

ReactDOM.render(
    element,
    document.getElementById('root')
);

function luckyNumber(){
    let min = 1;
    let max = 1000;
    let random = Math.floor(Math.random() * (max - min)) + min;

    return random;
}

function Greeting(props){
    return (
        <div>
            <h1>==== Lucky Number Generator ====</h1><br/>
            <h2>Hello, {props.user.name}</h2><br/>
            <h3 class="text-muted">This is your lucky number: {props.user.luckyNum}</h3>
        </div>
    );
}
