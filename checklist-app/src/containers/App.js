import React, { Component } from 'react';
import '../styles/App.css';

import AddItem from '../components/AddItem';
import { List} from '../containers/index';

class App extends Component {

 state = {
     items: []
  }


  render () {
    return (
      <div>
        <div class="container-fluid">
          <h1>Checklist</h1>
          <AddItem 
            handleNewItem={ this.addItem }
          />
         <List 
           title="Unchecked Tasks"
           header="These items still need to checked!"
         />
         <List
           title="Checked Tasks"
           header="You've checked the following items..."
         />
          <div className="buttons justify-content-between align-items-center">
            <span className="">
              <button type="button" className="btn btn-outline-primary btn-lg" onClick="">Uncheck all items</button>
            </span>
            <span className="">
              <button type="button" className="btn btn-outline-danger btn-lg" onClick="">Delete all items</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

