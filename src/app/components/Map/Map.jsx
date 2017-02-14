import React        from 'react';
import GoogleMap    from './GoogleMap.jsx';

export default class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            adress : "Choisissez un park dans la liste"
        }
    }

    render(){
        console.log(this.props.parks);

        let localisation = this.props.parks.map(park => {
           // console.log(park.formatted_address);
            // console.log(park.name);
            // console.log(park.geometry.location.lat);
            // console.log(park.geometry.location.lng);

         });

        return (
            <div id='map'>
                <h3>Adresse</h3>
                <p>{this.state.adress}</p>
                <GoogleMap/>
            </div>
        )
    }
}