import React from 'react'
import Axios from 'axios'
import Task from './Task'

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state ={
            inputTask: '',
            tasks: []
        }

        this.getTasks = this.getTasks.bind(this)
        this.sendTask = this.sendTask.bind(this)
        this.taskInput = this.taskInput.bind(this)

    }
    componentDidMount(){
        this.getTasks();
    }

    // getTasks is getting the tasks from 'todo' then is setting the state to the tasks that it got
    getTasks(){
        Axios.get("/todo").then(tasks => this.setState({ tasks: tasks.data }));
    }

    // sendTasks posts to 'todo' from state of inputTask then sets the state of inputTask to empty "". then returns the getTasks function
    sendTask(event){
        //     console.log('a response from sendTask')
        //     return this.getTasks();
        // });
        // event.preventDefault();
        this.setState({tasks: [...this.state.tasks, this.state.inputTask]});
        // everything in tasks and inputTasks goes into tasks
        console.log(this.state.inputTask)
        Axios.post("/todo", {task: this.state.inputTask}).then(() => {
            this.setState({inputTask: ""})
        }).catch(err => {console.log(err)});
    }

    deleteTask(event) {
        const id = event.target.value;
        console.log("id from client", id);
        Axios.delete(`/todo/${id}`).then(() => {
          return this.getTasks();
        });
      }

    // taskInput helps set the state of what goes into the text box (could probably just do it in render)
    taskInput(event) {
        this.setState({
            inputTask: event.target.value
        });
    }

    render(){
        return (
        <div>
            <h1>Taskly</h1>
            <input value={this.state.inputTask} onChange={this.taskInput}/>
            <button onClick={this.sendTask}>click here to add a task</button>
            {this.state.tasks.map(task => {
                return (
                <Task id={task.id} task={task} deleteTask={this.deleteTask}/>
                );
            })}
        </div>
        );
    }
} 