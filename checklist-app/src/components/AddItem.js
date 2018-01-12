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


 handleSubmitNewItem = (event) => {
    event.preventDefault();
      if (this.state.inputValue.length >= 1) {
        this.props.handleNewItem(this.state.inputValue);
        this.setState({
          inputValue: ''
        });
        this.refs.addNewItem.value = ''
  }
}


render () {
  return (
    <div >
    {/* <div class="input-group mb-3"> */}
    <input 
    type="text" 
    class="form-control" 
    placeholder="Add Item...." 
    aria-label="Add Item...." 
    aria-describedby="basic-addon2"
    ref="add new Item"
    onChange={ this.handleInputChange}
    />
    
  <div class="input-group-append">
    <button 
    type="submit" 
    class="btn btn-outline-secondary"
    onClick={ this.handleSubmitNewItem }> Add item</button>
  </div>
  </div>
  );
}
}
export default AddItem;