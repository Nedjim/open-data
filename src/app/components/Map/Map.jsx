import React        from 'react';
import GoogleMap    from './GoogleMap.jsx';

export default class Map extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id='map'>
                <GoogleMap/>
            </div>
        )
    }
}