import api from "../api/api"

export default function TaskList({ tasks, refreshTasks }) {

  const token = localStorage.getItem("token")

  const deleteTask = async (id) => {

    await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    refreshTasks()
  }

  const toggleStatus = async (task) => {

    await api.put(
      `/tasks/${task.id}`,
      {
        status: task.status === "PENDING" ? "COMPLETED" : "PENDING"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    refreshTasks()
  }

  return (
    <div>

      <h3>Tasks</h3>

      {tasks.length === 0 && <p>No tasks yet</p>}

      {tasks.map((task) => (
        <div key={task.id}>

          <h4>{task.title}</h4>

          <p>{task.description}</p>

          <p>Status: {task.status}</p>

          <button onClick={() => toggleStatus(task)}>
            Toggle Status
          </button>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}