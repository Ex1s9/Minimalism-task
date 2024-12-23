import './App.css'
import AddTaskForm from "./components/AddTaskForm"
import TaskList from "./components/TaskList"

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1 className="app-text">Task Manager</h1>
      <div className='app-input'>
        <AddTaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App
