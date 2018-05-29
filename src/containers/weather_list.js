import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    if(!cityData){
      return (
        <tr>
          <td colSpan="4">city not found</td>
        </tr>
      )
    }

    const id = cityData.city.id;
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={ id }>
        <td><GoogleMaps lat={ lat } lon={ lon } /></td>
        <td><Chart data={ temp } color="red" unit="K" /></td>
        <td><Chart data={ pressures } color="geen" unit="pHd" /></td>
        <td><Chart data={ humidities } color="black" unit="%" /></td>
      </tr>
    )
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (pHd) </th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){ //can change (state) to ({ weather }) in case have state.weather
  return { weather } // come from { weather: state.weather } => { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);