import React from 'react';
import Park from './Park.jsx';
import Request from 'superagent';
import _ from 'lodash';

export default class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            parks : [],
            search : ''
        }
    }

    create(){
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+Paris&key=AIzaSyDPU80o6EP72EteRY1C1CzHSImCm45g6f4";
        Request.get(url).then(data => {
            this.setState({parks: data.body.results});
         });
    }

     updateSearch(event){
         this.setState({search: event.target.value.substr(0,20)});
     }

    render(){
        this.create();
         let filterParks = this.state.parks.filter(park => {
             return park.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         });
        return (
            <div>
               <input type='text'
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filterParks.map(park => {
                        return <Park park={park} key={park.id}/>
                    })}
                </ul>
            </div>
        )
    }
}