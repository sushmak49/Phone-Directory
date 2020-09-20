import React,{ Component } from 'react';
import { Fragment } from 'react';


class App extends Component {
  render() {
      return (
        <Fragment>
        
            <div className="header">
            Phone Directory
            </div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Your Name"  defaultValue="Sushma" />
            <button>Add</button>
            <div>
              <span>Name</span><br/>
              <span>Phone</span>
            </div>
        
        </Fragment>
      );
    }
  }

export default App;
