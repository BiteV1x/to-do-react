import React from 'react'
import { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import { useEffect } from 'react'

const TaskForm = ({create, task}) => {
    const [taskData, setTaskData] = useState(task || { title: '', body: '' });

    useEffect(() => {
        setTaskData(task || { title: '', body: '' });
      }, [task]);

     const addOrEditTask = (e) => {
    e.preventDefault();
    create({ ...taskData, id: task?.id || Date.now() });
    setTaskData({ title: '', body: '' });
    };


  return (
    <div>
        <form>
            <div>
        <h1 style={{ textAlign: "center" }}>{task ? 'Edit Task' : 'Create new Task'}</h1>
        </div>
        <hr/>
        <div className='h-10'>
        <MyInput
          value={taskData.title}
          onChange={(e) => setTaskData({...taskData, title: e.target.value})}
          type="text"
          placeholder="Name task"
        />
        </div>
        <div className='pt-6 h-40'>
        <MyInput
          value={taskData.body}
          onChange={(e) => setTaskData({...taskData, body: e.target.value})}
          type="text"
          placeholder="Description task"
        />
        </div>
        <hr/>
        <div className='pt-6'>
        <MyButton onClick={addOrEditTask}> {task ? 'Edit Task' : 'Create Task'}</MyButton>
        </div>
      </form>
    </div>
  )
}

export default TaskForm