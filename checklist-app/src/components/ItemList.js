import React, { Component } from 'react';

class ItemList extends Component {

  handleRemoveClick = (event) => {
       event.preventDefault()
        this.props.handleRemoveItem(this.props.item.id)
   }

   handleToggleClick = (event) => {
     event.preventDefault()
     this.props.handleToggleItem(this.props.item.id)
   }
    

  render () {
    const { item: {
      id,
      name,
      checked } } = this.props;

    return (
      <div>
        <div className="header">Checklist Items ( count of items )</div>
        <div className="card-body text-success">
          <ul className="list-group" key="">
            <div className="items">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" value= { id } checked={ checked } onChange={ this.handleToggleClick }/>{ name }
                  </label>
                </div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={ this.handleRemoveClick }>Remove</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
 
