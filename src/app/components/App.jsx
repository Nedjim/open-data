import React from 'react';
import Search from './Search/Search.jsx';
import Header from './Header/Header.jsx';
import Map from './Map/Map.jsx';
import '../style/index.scss';

export default class App extends React.Component {

    render() {
        return (
            <div >
                <Header />
                <Search />
                <Map />
            </div>
        );
    }
}