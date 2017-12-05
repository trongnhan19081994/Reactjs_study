import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status:false
        }
    }

    componentWillMount(){ // Thực thi trước khi hiện thị taskForm
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            })
        }
    }

    componentWillReceiveProps(nextProps){ // Hàm này thực hiện liên tục mỗi khi props thay đổi
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            })
        } else if(!nextProps.task){ // Sửa thành thêm
            this.setState({
                id:'',
                name:'',
                status:false
            })
        }
    }

    onCloseFormClick = () =>{
        this.props.onCloseForm();
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
        this.props.onAddTask(this.state);
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

    var {id} = this.state;

    return (
      
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title"> {id!=='' ? 'Cập nhật công việc': 'Thêm công việc' }
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

const mapStateToProps = state =>{
    return{

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddTask : (task) => {
            dispatch(actions.addTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
