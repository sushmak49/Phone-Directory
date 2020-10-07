import React, { Component } from 'react';
import './Header.css'

const Header = function(props) {
    let JSObject ={textAlign:'center',padding:20,background:'#000',color:'#fff',textTransform:'uppercase'};
    return(
        <div className="header">
            {props.heading}
        </div>
    )
}

// class Header extends Component {
     
//     render() {
//         return (
//         <div class="header">
//             {this.propsp.heading}
//         </div>
//         )
//     }
// }

export default Header;