import React, { Component } from 'react';

class UncheckedItem extends Component {
  render () {
    return (
      <span className="">
        <button type="button" className="btn btn-outline-primary btn-lg" onClick= {this.props.handleUncheckItems} >Uncheck all items</button>
      </span>
    );
  }
}

export default UncheckedItem;

