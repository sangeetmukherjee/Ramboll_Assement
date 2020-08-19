import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchLandingDataSuccess } from '.././actions'
import './style.css';
//import {Navbar, Grid, Row, Col} from 'react-bootstrap'
import { Table, Navbar } from 'react-bootstrap'
import Row from './Row'

export class LandingTable extends React.Component {

  componentDidMount() {
    this.props.Landing();
  }

  constructor (props) {
    super(props);
  }

  getTableContent = (meteorSpecification) => {
    let setDataArray = [];
    let getRowData = {};
    let meteoriteValue = meteorSpecification;
    console.log("The Coordinates Values Is--->");

    for (const item of Object.entries(meteoriteValue)) {
      setDataArray.push(item)
    }
    return setDataArray.map((row, index) => {
      return <Row data={ row[1] } key={ row[0] } />;
    })

  }

  render() {

    return (
      <div>
        {/*this.getTableContent(this.props.Meteorites)*/ }
        <Navbar>
          Meteorite Landing
        </Navbar>
        <Table className="table" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Recorded Class</th>
              <th>Mass</th>
              <th>Fall</th>
              <th>Year</th>
              <th>X Coordinates</th>
              <th>Y Coordinates</th>
              <th>Check On Maps</th>
            </tr>
          </thead>
          <tbody>
            { this.getTableContent(this.props.Meteorites) }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Landing: () => dispatch(fetchLandingDataSuccess())
  }
}

function mapStateToProps(state) {
  console.log("Check Landing Details");
  const LandingDetails = state.getLandingDataReducer.landingData;
  return {
    Meteorites: LandingDetails
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingTable);