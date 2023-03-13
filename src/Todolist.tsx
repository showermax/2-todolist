import React, {useRef} from 'react';

export type FilterType = "All"|"Active"|"Completed"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (id:string) => void
    filtering: (filter: FilterType  ) => void
    add: (n: string) => void
}

export function Todolist(props: PropsType) {

    const addTaskInputRef = useRef<any>(null)

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input ref={addTaskInputRef} />
            <button onClick={()=>props.add(addTaskInputRef.current.value)}>add</button>
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
