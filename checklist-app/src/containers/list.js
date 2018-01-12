import React, { Component } from 'react';
import ItemList from '../components/ItemList';

class List extends Component {

  render () {
    const { items, title, header } = this.props;
    const count = items.length;
    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <div className="header">{ title } Items ({ count })</div>
          { count === 0 ? '' : 
            <p className="card-text">{ header }</p> }
          {items.map((item) => (
            <ul className="list-group" key={ item.id }>
              <ItemList
                item={ item }
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
