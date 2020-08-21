import React, { PureComponent } from "react";
import { Glyphicon } from 'react-bootstrap'
import Map from './Map';


export default class Row extends PureComponent {
	constructor (props) {
		super(props);
	}


	render() {
		var fullYear = (this.props.data.year).split("T")[0];
		if (this.props.data && this.props.data.geolocation) {
			if (this.props.data.geolocation.coordinates) {
				var xCoordinates = this.props.data.geolocation.coordinates[0]
				var yCoordinates = this.props.data.geolocation.coordinates[1]
				return (
					<tr>
						<td>{ this.props.data.id }</td>
						<td>{ this.props.data.name }</td>
						<td>{ this.props.data.recclass }</td>
						<td>{ this.props.data.mass }</td>
						<td>{ this.props.data.fall }</td>
						<td>{ fullYear }</td>
						<td>{ xCoordinates }</td>
						<td>{ yCoordinates }</td>
						<td>{ <Map xCoordinates={ xCoordinates } yCoordinates={ yCoordinates } /> }</td>
					</tr>
				);
			}
		}
		return (
			<tr>
				<td>{ this.props.data.id }</td>
				<td>{ this.props.data.name }</td>
				<td>{ this.props.data.recclass }</td>
				<td>{ this.props.data.mass }</td>
				<td>{ this.props.data.fall }</td>
				<td>{ fullYear }</td>
			</tr>
		);
	}
}