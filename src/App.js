import Task from './components/Task';
import React from 'react';
import MyButton from './components/UI/button/MyButton';
import ItemList from './components/ItemList';
import { useState } from 'react';
import MyModal from './components/UI/modal/MyModal';
import TaskForm from './components/TaskForm';
import './style/App.css';

function App() {

  const[tasknew, setTasknew] = useState([
    {id: 1, title: 'Task 1', body: 'Description task 1'},
    {id: 2, title: 'Task 2', body: 'Description task 2'},
    {id: 3, title: 'Task 3', body: 'Description task 3'}
  ]);
  const [task, setTask] = useState(() => []);
  const [modal, setModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const createTask = newTask => {
    setTask([...task, newTask]);
    setModal(false);
  };
  const removeTask = (taskToRemove) => {
    setTask(task.filter(t => t.id !== taskToRemove.id));
  };

  const openEditModal = task => {
    setTaskToEdit(task);
    setModal(true);
  };


  const editTask = editedTask => {
    if (!editedTask || !editedTask.id) return;
    setTask(task.map(t => (t.id === editedTask.id ? editedTask : t)));
    setModal(false); // Закрываем модалку
  };
  
  
  return (
    <div className="App">
      <header>
        <h1 className='text-5xl font-serif text-black'> Todo List</h1>
        <MyButton style={{ marginTop: 30 }}  onClick={() => { setTaskToEdit(null); setModal(true); }}>
        Create new task 
      </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
        <TaskForm create={taskToEdit ? editTask : createTask} task={taskToEdit} />
      </MyModal>
        <hr />
      </header>
      <hr />
      <div>
        <ItemList edit={openEditModal} remove={removeTask} task={task} title="List tasks" />
      </div>
       
    </div>
  );
}

export default App;
