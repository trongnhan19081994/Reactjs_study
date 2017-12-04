import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      product:[
        {
          id:1,
          name: 'Sản phẩm 1',
          price:21000000, 
          img: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951',
          content:'Nội dung sản phẩm 1',
          status:true
        },
        {
          id:2,
          name: 'Sản phẩm 2',
          price:22000000, 
          img: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-jetblack-select-2016?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430122140',
          content:'Nội dung sản phẩm 2',
          status:true
        },
        {
          id:3,
          name: 'Sản phẩm 3',
          price:23000000, 
          img: 'http://24hstore.vn/public/uploads/images/baiviet/iPhone-7-Plus-xach-tay.jpg',
          content:'Nội dung sản phẩm 3',
          status:true
        },
      ],
      isActive: true
    }
  }

  onSetState(){
    // if(this.state.isActive===true){
    //   this.setState({
    //     isActive: false
    //   })
    // } else {
    //   this.setState({
    //     isActive: true
    //   })
    // }

    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {

    let elements = this.state.product.map((product, index)=>{
        if(product.status===true) {
          return(
            <tr key={index}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td> <span className="label label-success"> {product.price} </span></td>
            </tr>
          )
        }  
     
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Handle events - state</a>
        </nav>
        <div className="container-fluid">
           <div className="row">
              <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elements}
                  </tbody>
              </table>
              <button onClick={this.onSetState.bind(this)} type="button" className="btn btn-success">
                {this.state.isActive===true?'True':'False'}
              </button>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
