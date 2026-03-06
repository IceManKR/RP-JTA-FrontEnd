import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/api"
import { AuthContext } from "../context/AuthContext"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Email and password required")
      return
    }

    try {

      const res = await api.post("/auth/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)

      login(res.data.token)

      navigate("/dashboard")

    } catch (err) {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="container">

      <div className="card">

        <h2>Login</h2>

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

          <button type="submit">Login</button>

        </form>

        <p className="link">
          No account? <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  )
}