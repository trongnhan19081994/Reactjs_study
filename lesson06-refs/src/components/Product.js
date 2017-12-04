import React, { Component } from 'react';

class Product extends Component {
  // Cách 1
  constructor(props) {
    super(props);
      this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(){
    alert(this.props.children);
  }

  // Cách 2: Arrow function
  onAddToCart2 = () =>{ 
    alert(this.props.children);
  }
  
  onAddToCart3(text){ // Cách truyền tham số
    alert(text);
  }

  render() {
    return (
      <div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={this.props.img} alt={this.props.img} />
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.price}
                </p>
                <p>
                    {this.props.children}
                </p>
                <p>
                  {/* <a className="btn btn-primary" onClick={ this.onAddToCart.bind(this)} >Mua ngay</a> */}
                  <a className="btn btn-primary" onClick={ this.onAddToCart } >Truyền theo kiểu contructor</a> <br/> <br/>

                  <a className="btn btn-primary" onClick={ this.onAddToCart2 } >Truyền theo kiểu arrow function</a> <br/> <br/>
                  <
                    a className="btn btn-primary" onClick={ () => this.onAddToCart3(this.props.name)} >Truyền có tham số</a> 
                </p>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
}

export default Product;
