import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
  clickme(){
    alert('fdsfsd fdsfdsf');
  }

  onAddProduct(){
      alert(this.refs.txt_product.value);
  }

  render() {
    var product = [
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
        status:false
      },
      {
        id:3,
        name: 'Sản phẩm 2',
        price:23000000, 
        img: 'http://24hstore.vn/public/uploads/images/baiviet/iPhone-7-Plus-xach-tay.jpg',
        content:'Nội dung sản phẩm 3',
        status:true
      },
    ];

    let elements = product.map((product, index)=>{
        if(product.status===true) {
          return(
            <Product key={product.id} name={product.name} price={product.price} img={product.img}>
                {product.content}
            </Product>
          )
        }  
     
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Handle events - Ref</a>
        </nav>
        <div className="container-fluid">
           <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                         
                  <div className="panel panel-danger">
                    <div className="panel-heading">
                      <h3 className="panel-title">Thêm sản phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                          <label>Tên sản phẩm</label>
                          <input type="text" ref='txt_product' className="form-control" id="" placeholder="Tên sản phẩm"/>
                        </div>
                        <button onClick={this.onAddProduct.bind(this)} className="btn btn-primary">Submit</button>
                      </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   {elements}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button onClick={ this.clickme.bind(this) } type="button" className="btn btn-danger">Click me</button>
                </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
