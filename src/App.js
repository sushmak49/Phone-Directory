import React,{ Component } from 'react';
import { Fragment } from 'react';
import Header from './Header.js'
import './Add.css'
import './ColNames.css'


class App extends Component {
  render() {
      let demoArray = [
        {
          id:101,
          prop1: "Sushma",
          prop2: "9880065125"
        },
        {
          id:102,
          prop1: "Sneha",
          prop2: "8951133354"
        }
      ]
      return (
          <div className = "component-container">
            <Header heading="Phone Directory" />
            <div className = "component-body-continer">
              <button className=' custom-btn add-btn'>Add</button>
              <div className="grid-container column-names">
                <span className="grid-item column">Name</span>
                <span className="grid-item column">Phone</span>
              </div>
              {
                demoArray.map( arrayElement => {
                  return (
                  <div key={arrayElement.id} className='grid-container' >
                    <span className="grid-item">{arrayElement.prop1}</span>
                    <span className="grid-item">{arrayElement.prop2}</span>
                    <button className='custom-btn delete-btn'>Delete</button>
                  </div>
                )}
              )}
            </div>
          </div>
          )}
    
}


export default App;