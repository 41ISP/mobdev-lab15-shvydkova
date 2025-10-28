import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"
import { registerUser } from "../api/api"
import { useUserStore } from "../store/store"

const SignUp = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setJWT } = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (e.target.password.value != e.target.password2.value) {
            setError("Password don't match")
            return
        }
        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
        }

        try {
            const json = await registerUser(user)
            if (!json.success) throw new Error(json.error)
            console.log(json)
            setJWT(json.token)
            navigate("/")
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign Up</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="username" required name="username"></Input>
                    <Input placeholder="email" required name="email"></Input>
                    <Input placeholder="password" required name="password" type="password"></Input>
                    <Input placeholder="Repeat password" required name="password2" type="password"></Input>
                    <Button>Sign Up</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signin">Sign In</Link>
                </footer>
            </div>
        </div>
    )
}
export default SignUp