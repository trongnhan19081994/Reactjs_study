import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm:false
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

    // onGenerateData(){
    //     var tasks = [
    //         {
    //             id:this.generateID(),
    //             name:'Học lập trình',
    //             status:true
    //         },
    //         {
    //             id: this.generateID(),
    //             name:'Học lập trình 2',
    //             status:true
    //         },
    //         {
    //             id: this.generateID(),
    //             name:'Học lập trình 3',
    //             status:false
    //         },
    //     ];
    //     this.setState({
    //         tasks: tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks)); // JSON.stringify(tasks): Chuyển từ kiểu Object sang kiểu String
    // }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + '-' +this.s4() + '-' + this.s4()+ '-' + this.s4()+ '-' + this.s4()+ '-' + this.s4();
 
    }

    onToggleForm = () =>{
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onCloseForm = () =>{
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmitData(data){
        var {tasks} = this.state;
        data.id=this.generateID();
        data.name= data.name;
        data.status= data.status;
        tasks.push(data);
        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));// JSON.stringify(tasks): Chuyển từ kiểu Object sang kiểu String
   
    }

  render() {

    var {tasks, isDisplayForm} = this.state; //tương đương: var tasks = this.state.tasks;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmitData.bind(this)} />: '';

    return (
      
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
                  {/* Form Thêm công việc */}
                  {elmTaskForm}
              </div>
              <div  className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                  <button onClick={this.onToggleForm} type="button" className="btn btn-primary">
                      <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button> &nbsp;&nbsp;
                    {/* Search - Sort */}
                  {/* <button onClick={this.onGenerateData.bind(this)} type="button" className="btn btn-danger">
                      Generate Data
                  </button> */}
                    {/* Search - Sort */}
                    <Control />

                  {/* List */}
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks={tasks}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

export default App;
