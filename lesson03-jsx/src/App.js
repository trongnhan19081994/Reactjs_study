import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var a = 5;
    var ten = "Trong Nhan";
    var b = 7;
    var product = {
      id:1,
      name: 'Iphone 7 plus',
      price: 21000000
    }
    return (
      <div className="container">
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
        <div>
          <h2> 
            a: {a} <br/>
            b: {b} <br/>
            a+b: {a+b} <br/>
          
          </h2>
          <h3> Name: {ten} </h3>
          <h3> 
              id: {product.id} <br/>
              Name: {product.name} <br/>
              Price: {product.price} <br/>
          
          </h3>
        </div>
      </div>
    ); 
  }
}

export default App;
