import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

function App(): JSX.Element {

console.log(typeof (v1()))

    let [tasks1, setTask] = useState<Array<TaskType>> ( [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "English", isDone: false },
        { id: v1(), title: "To surf", isDone: false }
    ]
    )
    const [filter, setFilter] = useState("All")

    const removeTask = (id:string)=>{
        tasks1 = tasks1.filter(el=> el.id!==id)
        setTask(tasks1)
        console.log(tasks1)
    }
    const addTask = (newTaskName: string) =>{
        let newTask = { id: v1(), title: newTaskName, isDone: false }
        setTask([...tasks1, newTask])
    }

    let filteredTasks = tasks1
    if (filter === "Active")  {filteredTasks = tasks1.filter(el => !el.isDone)}
    if (filter === "Completed")  {filteredTasks = tasks1.filter(el => el.isDone)}

    function filtering(filter: FilterType) {
        setFilter(filter)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks} remove={removeTask} filtering={filtering} add={addTask}/>
        </div>
    );
}

export default App;
