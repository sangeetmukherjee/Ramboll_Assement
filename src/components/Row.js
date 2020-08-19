import React, { PureComponent } from "react";
//import {Glyphicon} from 'react-bootstrap'
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

export default class Row extends PureComponent {

	// componentDidMount() {
  
	// 	const map = new mapboxgl.Map({
	// 	  container: this.mapWrapper,
	// 	  style: 'mapbox://styles/mapbox/streets-v10',
	//	  center: [xCoordinates, yCoordinates],
	// 	  center: [-73.985664, 40.748514],
	// 	  zoom: 12
	// 	});
	// }

	constructor (props) {
		super(props);
	}

	render() {
		if (this.props.data && this.props.data.geolocation) {
			if (this.props.data.geolocation.coordinates) {
				var xCoordinates = this.props.data.geolocation.coordinates[0]
				var yCoordinates = this.props.data.geolocation.coordinates[1]
			}
		}

		return (
			<tr>
				<td>{ this.props.data.id }</td>
				<td>{ this.props.data.name }</td>
				<td>{ this.props.data.recclass }</td>
				<td>{ this.props.data.mass }</td>
				<td>{ this.props.data.fall }</td>
				<td>{ this.props.data.year }</td>
				<td>{ xCoordinates }</td>
				<td>{ yCoordinates }</td>
			</tr>
		);



	}
}