import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Nurse appointment',
        day: 'Feb 7th at 2:30pm',
        reminder: false,
    }
])
  //delete task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle Reminder
  const toggleReminder = (id)=>{
      setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
  }

  //Add task
  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
        <Header onAdd = {()=>setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}/>
        {showAddTask && <AddTask onAdd = {addTask}/>}
        {tasks.length>0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>:('No Task to Show')}
    </div>
  );
}

export default App;
