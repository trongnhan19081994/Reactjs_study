import React, { Component } from 'react';
import './App.css';

class App extends Component {

  showInfoProduct(product){
      if(product.status===true){
          return(
            <h3> 
                id: {product.id} <br/>
                Name: {product.name} <br/>
                Price: {product.price} <br/>
                Status: {product.status? "active" : "Pending"}
            </h3>
          )
      }
  }

  render() {
    var a = 5;
    var ten = "Trong Nhan";
    var b = 7;
    var product = {
      id:1,
      name: 'Iphone 7 plus',
      price: 21000000,
      status: true
    }
    var user = [
      {
        id:1,
        name: 'Nguyễn Văn A',
        age: 18
      },
      {
        id:2,
        name: 'Nguyễn Văn B',
        age: 28
      },
      {
        id:3,
        name: 'Nguyễn Văn C',
        age: 38
      },
    ];

    var elements = user.map((user, index)=>{
        return(
          <div key={user.id}>
              <h2>Tên: {user.name}</h2>
              <p>Tuổi: {user.age}</p>
          </div>
        )
    });

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
           {this.showInfoProduct(product)}
           <br/>
           {elements}
        </div>
      </div>
    ); 
  }
}

export default App;
