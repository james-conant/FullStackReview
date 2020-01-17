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
        this.sendTasks = this.sendTasks.bind(this)
        this.taskInput = this.taskInput.bind(this)

    }
    componentDidMount(){
        this.getTasks();
    }

    // getTasks is getting the tasks from 'todo' then is setting the state to the tasks that it got
    getTasks(){
        Axios.get("todo").then(tasks => this.setState({tasks: tasks.data}));
    }

    // sendTasks posts to 'todo' from state of inputTask then sets the state of inputTask to empty "". then returns the getTasks function
    sendTasks(){
        Axios.post("todo", {task: this.state.inputTask}).then(() => {
            this.setState({inputTask: ""})
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
            <input value={this.state.inputTask} onChange={this.taskInput}></input>
            <button onClick={this.sendTask}>add a task</button>
        </div>
        )
    }


} 
