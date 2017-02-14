import React from 'react';
import {GoogleMap} from 'react-google-maps';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export default class GoogleM extends React.Component {

    onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

    render(){
        return (
            <Gmaps
                width={'80%'}
                height={'75vh'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={12}
                loadingMessage={'Be happy'}
                params={{v: '3.exp', key: 'AIzaSyBZgn4XfISYSuxKTfQZgbx5fHxetmEGfzI'}}
                onMapCreated={this.onMapCreated}>
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd} />
                <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={'Hello, React :)'}
                    onCloseClick={this.onCloseClick} />
                <Circle
                    lat={coords.lat}
                    lng={coords.lng}
                    radius={500}
                    onClick={this.onClick} />
      </Gmaps>
        )
    }
}