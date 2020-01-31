import React, { Component } from 'react';
import {Display}  from './contacts.jsx';

class App extends Component {
  constructor() {
  super();
    this.state = {
        contacts: []
      };
    }


 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => {
    this.setState({ contacts: data })
   } )
    .catch(console.log)
  }


 render() {
  return (
       <div>
          <Display contacts={this.state.contacts} />
       </div>
       );
    }

}

export default App;
