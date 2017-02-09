import React from 'react';


export default class Park extends React.Component {
    render(){
        return (
            <li>{this.props.park.name}</li>
        )
    }
}