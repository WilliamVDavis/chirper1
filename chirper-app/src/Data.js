import React, { Component } from 'react';
import './App.css'

class Data extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/items')
    .then(res => res.json())
    .then(json => 
      this.setState({ 
        isLoaded: true, 
        items: json 
      }))
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Please wait..loading</div>;
    }
    else {

    return (
      <div>
        {items.map(items => (
          <div className="fee" key={items.id}>
          <p>{items.name}</p>
          </div>
        ))}
        </div>
    ) 
        }   
  }
}

export default Data;