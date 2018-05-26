import React, { Component } from 'react';

export default class SearchBar extends Component{
  render(){
    return (
      <form className="input-group container">
        <input className="col-md-12" />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}