import React from 'react';

export default class Park extends React.Component {

    constructor(props){
        super();
        this.state = {
            id : props.park.id
        }
    }

    render(){
        console.log(this.props);
        return (
            <li>{this.props.park.name}</li>
        )
    }
}