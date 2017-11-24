import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      color:'red', 
      fontSize:15
    }
  }

  onSetColor(params){
    this.setState({
      color:params
    });
  }

  onSetSize(value){
    // 8< size < 36
      this.setState({
        fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize // +2 -2
      });
  }

  onSettingDefault(value){
    if(value){
      this.setState({
        color:'red', 
        fontSize:15
      });
    }
  }

  render() {

    return (
      <div className="container mt-50">
        <div className="row">
           
          <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor.bind(this) } > </ColorPicker>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize={this.state.fontSize} onReceiveSize={ this.onSetSize.bind(this) }></SizeSetting>
              <Reset onSettingDefault={this.onSettingDefault.bind(this)} ></Reset>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} ></Result>
            
        </div>
      </div>
    );

  }
}

export default App;
