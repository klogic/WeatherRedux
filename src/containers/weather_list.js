import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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

    return (
      <tr key={ id }>
        <td>{ name }</td>
        <td>
          <Sparklines data={ temp } width={ 180 } height={ 120 }>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    )
  }
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