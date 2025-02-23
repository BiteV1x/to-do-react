import React from 'react'
import MyButton from './UI/button/MyButton'
import Task from './Task'
import "../style/App.css"

const ItemList = ({task, title, remove, edit}) => {
    if (!task.length) {
        return <h1 className='text-3xl'>Task not found</h1>;
      }
  return (
    <div>
        <h1 className='text-3xl  font-serif '>{title}</h1>
        <div className="task__container">
        {task.map((task, index) => (
          <Task key={task.id} edit={edit} remove={remove} number={index + 1} task={task} />
        ))}
      </div>
    </div>
  )
}

export default ItemList