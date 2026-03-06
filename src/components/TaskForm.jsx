import { useState } from "react"
import api from "../api/api"

export default function TaskForm({ refreshTasks }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title) return

    setLoading(true)

    try {

      const token = localStorage.getItem("token")

      await api.post(
        "/tasks",
        {
          title,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setTitle("")
      setDescription("")

      refreshTasks()

    } catch (err) {
      console.error("Error creating task:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      <h3>Create Task</h3>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          {loading ? "Adding..." : "Add Task"}
        </button>

      </form>

    </div>
  )
}