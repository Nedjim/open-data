import React from 'react';
import Park from './Park.jsx';
import Request from 'superagent';
import _ from 'lodash';

import Modal from './Modal.jsx';

export default class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            parks : [],
            search : ''
        }
        this.create();
    }

    create(){
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+Paris&key=AIzaSyDPU80o6EP72EteRY1C1CzHSImCm45g6f4";
        Request.get(url).then(data => {
            console.log(data);
            this.setState({parks: data.body.results});
         });
    }

     updateSearch(event){
         this.setState({search: event.target.value.substr(0,20)});
     }

    render(){
         let filterParks = this.state.parks.filter(park => {
             return park.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         });
        return (
            <div id="search">
               <input type='text'
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder="Rechercher sur la map"/>
                <div className='list'>
                    {filterParks.map(park => {
                        return <Park park={park} key={park.id}/>
                    })}
                </div>
            </div>
        )
    }
}