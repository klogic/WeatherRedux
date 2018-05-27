import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){ //can change (state) to ({ weather }) in case have state.weather
  return { weather } // come from { weather: state.weather } => { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);