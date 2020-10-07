import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddSubscriber from './AddSubscriber'

// ReactDOM.render(
//   <React.StrictMode>
//     <App   />
//   </React.StrictMode>,
//   // <span>1. Is React a JavaScript library for building user-interfaces?</span>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div class="options-main-container">
//     <form class="options">
//       <input type="radio">yes</input>
//       <input type="radio">no</input>
//     </form>
//   </div>
//   ,
//   document.getElementsByClassName('options-main-container')
// )

ReactDOM.render(
  <AddSubscriber />,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
