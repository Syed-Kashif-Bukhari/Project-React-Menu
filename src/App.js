import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }



class Menu extends React.Component{
  render() {
    return(
      <nav className="navbar navbar-inverse" style={{background: "gray"}} >
      
        <ul className="nav navbar-nav" >
        
           <li> <a href="#">Home</a></li> 
            
            <li> <a href="#">About</a></li>
        
            <li> <a href="#">Services</a></li>
        
            <li> <a href="#">Portfilo</a></li>
            
            <li> <a href="#">Contect us</a></li>
        
        </ul>
      
      </nav>
    )
  }
}

// class Menu extends React.Component {
//   render() {
//     let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];
//     return React.createElement(
//       'div',
//       null,
//       menus.map((v, i) => {
//         return React.createElement(
//           'div',
//           { key: i },
//           React.createElement(Link, { label: v })
//         );
//       })
//     );
//   }
// }

// class Link extends React.Component {
//   render() {
//     const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
//     return React.createElement(
//       'div',
//       null,
//       React.createElement(
//         'a',
//         { href: url },
//         this.props.label
//       ),
//       React.createElement('br', null)
//     );
//   }
// }
 export default Menu;