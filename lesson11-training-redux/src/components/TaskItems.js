import React, { Component } from 'react';

class TaskItems extends Component {
  
    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItems = () =>{
        this.props.onDeleteItems(this.props.task.id);
    }

    onUpdate = () =>{
        this.props.onUpdate(this.props.task.id);
    }
  
    render() {

    var {task, index} = this.props;

    return (

        <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span 
                    className={task.status===true? 'label label-danger' : 'label label-success'}
                    onClick={this.onUpdateStatus}
                    >
                        {task.status===true? ' Kích Hoạt' : ' Ẩn'}  
                </span>
            </td>
            <td className="text-center">
                <button onClick={this.onUpdate}  type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button onClick={this.onDeleteItems} type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>

    );
  }
}

export default TaskItems;
