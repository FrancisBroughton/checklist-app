import React, { Component } from 'react';
import '../styles/App.css';
import _ from 'lodash'
import {AddItem, UncheckedItem, DeleteAll} from '../components/index';
import { List,} from '../containers/index';

class App extends Component {

 state = {
     items: []
  }

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    })
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

toggleItem = (id) => {
  this.setState({
    items: this.state.items.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          name: item.name,
          checked: !item.checked
        }
      }
      return item;
    })
  })
}
  render () {
    const checked = this.state.items.filter(item => item.checked);
    const unchecked = this.state.items.filter(item => !item.checked);
    return (
      <div className= "container-fluid">
        <div className="app">
          <h1>Checklist</h1>

          <AddItem 
            handleNewItem={ this.addItem }
          />
          { this.state.items.length >= 1 ?
          <div>
         <List 
          items= {unchecked}
           title="Unchecked Tasks"
           header="These items still need to checked!"
           handleRemoveItem={ this.removeItem }
           handleToggleItem={ this.toggleItem }
         />

        <List
         items= {checked}
           title="Checked Tasks"
           header="You've checked the following items..."
           handleRemoveItem={ this.removeItem }
           handleToggleItem={ this.toggleItem }
         />
          
          <div className="buttons justify-content-between align-items-center">
            <UncheckedItem handleUncheckedItems= { this.UncheckedItems }/>

            <DeleteAll 
                handleDeleteAll={ this.deleteAllItems }/>
          
          </div>
         </div> : '' }
      </div>
      </div>
    );
  }
}

export default App;
