import React, { Component } from 'react';
import '../styles/App.css';

import {AddItem, UncheckedItem, DeleteAll} from '../components/index';
import { List,} from '../containers/index';

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
            <UncheckedItem/>

            
            <DeleteAll />
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;

