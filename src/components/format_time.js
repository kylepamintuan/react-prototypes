import React, { Component } from 'react';

class FormatTime extends Component{
    constructor(props){
        super(props);

        this.timeInMs = props.timeInMs;
    }

    render(props){
        return (
            <div>
                {this.timeInMs}
            </div>
        );
    }
}

export default FormatTime;