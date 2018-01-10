import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div>
        Hello world! The Page is rendering!
      
        <div class="container-fluid">
          <div class="input-group mb-3">
            <input type="text" class="form-control" 
              placeholder="Add Item...." 
              aria-label="Add Item...." 
              aria-describedby="basic-addon2"/>
            <div class="input-group-append">
              <button type="button" class="btn btn-outline-secondary">Add item</button>
            </div>
           
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;

