import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{

  constructor(props){
    super(props)

    this.state = { term : '' }
    
    this.onInputChange = this.onInputChange.bind(this);
    this.OnFromSubmit = this.OnFromSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term : event.target.value})
  }

  OnFromSubmit(event){
    // prevent user for submit form.
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return (
      <form className="input-group container" onSubmit={ this.OnFromSubmit }>
        <input 
        className="form-control" 
        placeholder="get 5 days forecast of you cities"
        value = { this.state.term }
        onChange = { this.onInputChange }
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);