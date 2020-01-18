import React from "react"
const Task = (props) => {
    return (
        <div key={`task_${props.id}`}>
    <span>{props.task}</span>
    <button value={props.id} onClick={props.deleteTask}>complete</button>

    </div>
    )
}
export default Task
