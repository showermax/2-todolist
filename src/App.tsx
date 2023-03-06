import React, {useState} from 'react';
import './App.css';
import {FilterType, Todolist} from './Todolist';

function App() {

    let [tasks1, setTask] = useState ( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "English", isDone: false },
        { id: 5, title: "To surf", isDone: false }
    ]
    )
    const [filter, setFilter] = useState("All")

    const removeTask = (id:number)=>{
        tasks1 = tasks1.filter(el=> el.id!==id)
        setTask(tasks1)
        console.log(tasks1)
    }
    let filteredTasks = tasks1
    if (filter === "Active")  {filteredTasks = tasks1.filter(el => el.isDone === false)}
    if (filter === "Completed")  {filteredTasks = tasks1.filter(el => el.isDone === true)}

    function filtering(filter: FilterType) {
        setFilter(filter)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks} remove={removeTask} filtering={filtering}/>
        </div>
    );
}

export default App;
