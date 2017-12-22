import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            taskEditing:null,
            sortBy:'name',
            sortValue:1
        }
    }

    componentWillMount(){
       if(localStorage && localStorage.getItem('tasks')){
           var tasks = JSON.parse(localStorage.getItem('tasks'));
           this.setState({
            tasks: tasks
           })
       }
    }


 
    onToggleForm = () =>{
        var {itemEditing} = this.props;
        if(itemEditing && itemEditing.id !==''){
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id:'',
            name:'',
            status:false
        });
       
    }

    onShowForm = () =>{
        this.setState({
            isDisplayForm: true
        });
    }

    onSubmitData(data){
        var {tasks} = this.state;
        if(data.id===''){
            data.id=this.generateID();
            // data.name= data.name;
            // data.status= data.status;
            tasks.push(data);
        } else {
            //Editing
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
       
        this.setState({
            tasks:tasks, 
            taskEditing: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));// JSON.stringify(tasks): Chuyển từ kiểu Object sang kiểu String
   
    }


    findIndex = (id) =>{
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach( (task, index) =>{
            if(task.id===id){
                result=index;
            }
        } );
        return result;
    }


    onSearch = (keyword) =>{
       this.setState({
           keyword: keyword
       })
    }

    onSort = (sortBy, sortValue) =>{
        this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        })
    }

  render() {

    var { sortBy, sortValue} = this.state; //tương đương: var tasks = this.state.tasks;
    
    var { isDisplayForm } = this.props;
    

    // if(sortBy==='name'){
    //     tasks.sort((a,b)=>{
    //         if(a.name > b.name){
    //             return sortValue;
    //         } 
    //         else if(a.name < b.name){
    //             return -sortValue;
    //         }
    //         else return 0;      
    //     })
    // } else {
    //     tasks.sort((a,b)=>{
    //         if(a.status > b.status){
               
    //             return -sortValue;
    //         } 
    //         else if(a.status < b.status){
    //             return sortValue;
    //         }
    //         else return 0;      
    //     })
    // }
   

    // var elmTaskForm = isDisplayForm ? <TaskForm 
    //     onSubmit={this.onSubmitData.bind(this)} 
    //     task={taskEditing}
    // />: '';

    return (
      
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
                  {/* Form Thêm công việc */}
                    <TaskForm />
              </div>
              <div  className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                  <button onClick={this.onToggleForm} type="button" className="btn btn-primary">
                      <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button> &nbsp;&nbsp;
                    {/* Search - Sort */}
                    <Control 
                        onSearch={this.onSearch} 
                        onSort = {this.onSort}
                        sortBy = {sortBy}
                        sortValue={sortValue}
                    />

                  {/* List */}
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

const mapStateToProps = state =>{
    return{
       isDisplayForm: state.isDisplayForm,
       itemEditing: state.itemEditing
    };
};
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onToggleForm : () =>{
            dispatch(actions.toggleForm());
        },
        onClearTask : (task) => {
            dispatch(actions.editTask(task));
        },
        onOpenForm : () =>{
            dispatch(actions.openForm());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
