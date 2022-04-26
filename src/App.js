import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Food Shopping",
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 2,
            text: "Another task",
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header 
        title='Task Tracker' 
        onAdd={()=>setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> :
        'No tasks to show'
      }
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a class</h1>
//   }
  
// }

export default App;
