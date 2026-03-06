import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/api"

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("All fields required")
      return
    }

    try {

      await api.post("/auth/register", {
        email,
        password
      })

      navigate("/login")

    } catch (err) {
      setError("Registration failed")
    }
  }

  return (
    <div className="container">

      <div className="card">

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Register</button>

        </form>

        <p className="link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  )
}