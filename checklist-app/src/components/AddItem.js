import React, { Component } from 'react';

class AddItem extends Component {

state = {
  inputValue: ''
}
handleInputChange = (event) => {
  event.preventDefault();
  this.setState({
    inputValue: event.target.value
  })
}

render () {
  return (
    <div className= "form-group">
    {/* <div class="input-group mb-3"> */}
    <input type="text" class="form-control" 
    placeholder="Add Item...." 
    aria-label="Add Item...." 
    aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-secondary">Add item</button>
  </div>
  </div>
  );
}
}


export default AddItem;