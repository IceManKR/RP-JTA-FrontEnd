import { useEffect, useState, useContext } from "react"
import api from "../api/api"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard() {

  const [tasks, setTasks] = useState([])
  const { logout } = useContext(AuthContext)

  const fetchTasks = async () => {

    const token = localStorage.getItem("token")

    const res = await api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h2>Task Dashboard</h2>

        <button onClick={logout}>Logout</button>

      </div>

      <TaskForm refreshTasks={fetchTasks} />

      <TaskList tasks={tasks} refreshTasks={fetchTasks} />

    </div>
  )
}