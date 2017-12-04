import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state={
      txtUserName: '', 
      txPassword:'', 
      txtDesc: '',
      sltGender:0,
      rdLang:'en',
      chkStatus:false
    }
  }
 
  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type==='checkbox' ? target.checked : target.value;
    this.setState({
        [name]:value
    })
  }

  onHandleSubmit(event){
      event.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-30">
          <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">Form</h3>
                      </div>
                      <div className="panel-body">

                        <form onSubmit={this.onHandleSubmit.bind(this)} >
                          <div className="form-group">
                            <label>User name: </label>
                            <input type="text" name="txtUserName" className="form-control" 
                              onChange={ this.onHandleChange.bind(this) } 
                              value={this.state.txtUserName}
                            />
                          </div>
                          <div className="form-group">
                            <label>Password: </label>
                            <input type="password" name="txPassword" className="form-control" 
                              onChange={ this.onHandleChange.bind(this) }
                              value={this.state.txPassword}
                            />
                          </div>
                          <div className="form-group">
                            <label>Mô tả: </label>
                            <textarea name="txtDesc" className="form-control" rows="3"
                              onChange={ this.onHandleChange.bind(this)}
                              value={this.state.txtDesc}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label>Giới tính: </label>
                            <select name="sltGender"  className="form-control" value={this.state.sltGender}
                              onChange={this.onHandleChange.bind(this)}
                            >
                              <option value={0}> Nữ </option>
                              <option value={1}> Nam </option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Ngôn ngữ: </label>
                            <div className="radio">
                              <label>
                                <input type="radio"  name="rdLang" value="vi" onChange={this.onHandleChange.bind(this)} checked={this.state.rdLang==='vi'?'checked': ''}/>
                                Tiếng việt
                              </label>&nbsp;
                              <label>
                                <input type="radio"  name="rdLang" value="en" onChange={this.onHandleChange.bind(this)} checked={this.state.rdLang==='en'?'checked': ''}/>
                                English
                              </label>
                            </div>                           
                          </div>

                          <div className="checkbox">
                            <label>
                              <input type="checkbox"
                               name="chkStatus" 
                                value={true}
                                onChange={this.onHandleChange.bind(this)}
                                checked={this.state.chkStatus===true? 'checked': ''}
                              />
                              Trạng thái
                            </label>
                          </div>

                          <button type="submit" className="btn btn-primary">Lưu</button> &nbsp;
                          <button type="reset" className="btn btn-default">Xóa trắng</button>
                        </form>

                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
      
    );
  }
}

export default App;
