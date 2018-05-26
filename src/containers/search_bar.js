import React, { Component } from 'react';

export default class SearchBar extends Component{

  constructor(props){
    super(props)

    this.state = { term : '' }
    
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({term : event.target.value})
  }

  OnFromSubmit(event){
    // prevent user for submit form.
    event.preventDefault();
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