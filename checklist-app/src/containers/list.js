import React, { Component } from 'react';
import ItemList from '../components/ItemList';

class List extends Component {

  render () {
    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <ItemList/>
          <ItemList/>
        </div>
      </div>
    );
  }
}

export default List;
