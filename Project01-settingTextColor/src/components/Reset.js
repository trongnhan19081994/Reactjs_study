import React, { Component } from 'react';
class Reset extends Component {

  onResetDefault(){
    this.props.onSettingDefault(true);
  }

  render() {

    return (
        <button onClick={this.onResetDefault.bind(this)} type="button" className="btn btn-primary">Reset</button>      
    );

  }
}

export default Reset;
