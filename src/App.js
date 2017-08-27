// likely I'll be reading and writing to the same place
import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    // super just calls the Components constructor
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
    // remember that this is context sensitive so we need to bind the context to the current component.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // database.ref() will return the root of the node.
    // database.ref().on('value')
    // I'm not allowed to read from the database unless I'm authenticated. 
    // whenever the change occurred, we get a snapshot of the changes that occurred at that moment.
    // the initial ref refers to the root of the entire database. 
    this.dataRef = database.ref('/wow');
    
    // on will continually happen. You do want to clean up your listeners when a componenet dismounts
    // there is also an off method. 
    this.dataRef.on('child_added', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });

  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.dataRef.push(this.state.newData)
  }

  handleChange(evt) {
    const newData = evt.target.value;
    this.setState({
      newData
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App--header'>
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className='App--data'>
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form class="app-form" onSubmit={ this.handleSubmit }>
          <input type="text" value={this.state.newData} onChange={ this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default App;
