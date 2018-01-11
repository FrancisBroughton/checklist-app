import React, { Component } from 'react';
import '../styles/App.css';
import _ from 'lodash'
import {AddItem, UncheckedItem, DeleteAll} from '../components/index';
import { List,} from '../containers/index';

class App extends Component {

 state = {
     items: []
  }

   addItem = (name) => {    this.setState({
    items: [{
      id: _.uniqueId(),
      name: name,
      unpacked: false,
      packed: false
    }, ...this.state.items]
  })
}

UncheckedItem = () => {
  this.setState({
    items: this.state.items.map(({ id, name}) => {
      return {
        id: id,
        name: name,
        checked: false
      }
    })
  })
}

deleteAllItems = () => {
  this.setState({
    items: []
  })
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
            <UncheckedItem handleUncheckedItems= { this.UncheckedItems }/>

            <DeleteAll 
                handleDeleteAll={ this.deleteAllItems }/>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;

