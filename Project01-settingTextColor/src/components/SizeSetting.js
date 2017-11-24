import React, { Component } from 'react';
class SizeSetting extends Component {

    constructor(props){
        super(props);
        this.state={
            fontSize: this.props.fontSize
        }
    }

    changeSize(value){
        this.props.onReceiveSize(value);
    }

  render() {

    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
            <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
            </div>
            <div className="panel-body">
                <button onClick={ ()=>this.changeSize(+2) } type="button" className="btn btn-success">Tăng</button>
                <button onClick={ ()=>this.changeSize(-2) } type="button" className="btn btn-success">Giảm</button>
            </div>
        </div>
    );

  }
}

export default SizeSetting;
