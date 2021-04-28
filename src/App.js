import {useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {id:1,
    text:'doctors',
    day:'feb 1',
    reminder:true,},
    {id:2,
      text:'dentist',
      day:'feb 2',
      reminder:true,}, 
    {id:3,
      text:'ortho',
      day:'feb 3',
      reminder:false,},
    {id:4,
      text:'massage',
      day:'feb 4',
      reminder:true,}
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }
    return (
    <div className="App">
      <Header title = 'Minjuns Schedule' showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
