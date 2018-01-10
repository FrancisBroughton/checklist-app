import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div>
        Hello world! The Page is rendering!
      
        <div class="container-fluid">
          {/* <div class="input-group mb-3"> */}
          <input type="text" class="form-control" 
            placeholder="Add Item...." 
            aria-label="Add Item...." 
            aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <button type="button" class="btn btn-outline-secondary">Add item</button>
          </div>
          <div className="card border-success mb-3">
            <div className="card-header">
              <div className="header">Checked Items ( count of Items )</div>
            </div>
            <div className="card-body text-success">
              <ul className="list-group" key="">
                <div className="items">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 1
                      </label>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
                  </li>
                </div>
                <div className="items">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 2
                      </label>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="card border-success mb-3">
            <div className="card-header">
              <div className="header">Unchecked Items ( count of Items )</div>
            </div>
            <div className="card-body text-success">
              <ul className="list-group" key="">
                <div className="items">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 1
                      </label>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
                  </li>
                </div>
                <div className="items">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 2
                      </label>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      // </div>
    );
  }
}

export default App;

