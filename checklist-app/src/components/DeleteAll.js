import React, { Component } from 'react';

class DeleteAll extends Component {

  render () {
    return (
      <span className="">
        <button type="button" className="btn btn-outline-danger btn-lg" onClick={this.props.handleDeleteAll} >Delete all items</button>
      </span>
    );
  }
}

export default DeleteAll;
