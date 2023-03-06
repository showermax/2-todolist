import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (id:number) => void
    filtering: (filter:"All"|"Active"|"Completed") => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>del</button>
        </div>
        <ul>
            {props.tasks.map(el => <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
                    <button onClick={()=>props.remove(el.id)}>X</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={()=>props.filtering("All")}>All</button>
            <button onClick={()=>props.filtering("Active")}>Active</button>
            <button onClick={()=>props.filtering("Completed")}>Completed</button>
        </div>
    </div>
}
