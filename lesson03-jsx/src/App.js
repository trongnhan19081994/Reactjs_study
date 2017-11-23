import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     
     <nav className="navbar navbar-inverse">
       <a className="navbar-brand">Title</a>
       <ul className="nav navbar-nav">
         <li className="active">
           <a>Home</a>
         </li>
         <li>
           <a>Link</a>
         </li>
       </ul>
     </nav>
     
    ); 
  }
}

export default App;
