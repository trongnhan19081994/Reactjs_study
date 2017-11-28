import React, { Component } from 'react';

class TaskForm extends Component {

    onCloseFormClick = () =>{
        this.props.onCloseForm();
    }

    constructor(props){
        super(props);
        this.state={
            name:'',
            status:false
        }
    }

    onChange(event){
        var target = event.target;
        var name = target.name;
        var value =  target.value;
        if(name==='status'){
            value = target.value==='true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmitForm = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        //Cancel & Close Form
        this.onClear();
        this.onCloseFormClick();
    }

    onClear = () =>{
        this.setState({
            name:'',
            status:false
        })
        this.onCloseFormClick();
    }

  render() {
    return (
      
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc
                    <span className="fa fa-window-close text-right" onClick={this.onCloseFormClick}></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" 
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange.bind(this)}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button onClick={this.onClear} type="submit" className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>

    );
  }
}

export default TaskForm;
