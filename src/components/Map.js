import React, { useRef, useEffect, Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGVqamFpbiIsImEiOiJjazR3ZHFybXEwNW14M2xtenZ5bTUza3JtIn0.ovtzWcWgFsJXF3ypDMnEqw';


class Map extends Component {
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.props.xCoordinates, this.props.yCoordinates],
            zoom: 12.5
        });
    }
    render() {
        return (
            <div>
                <div ref={ el => this.mapContainer = el } />
            </div>
        )
    }
}




export default Map;


