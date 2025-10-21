import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import { loginUser } from "../api/api"

const SignIn = () => {
    const [error, setError] = useState("")
    //const { setJWT } = useUserStore()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        try {
            const json = await loginUser(user)
            if (!json.success) throw new Error(json.error)
            console.log(json)
            //setJWT(json.token)
            navigate("/")
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign In</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="username" required name="username"></Input>
                    <Input placeholder="password" required name="password" type="password"></Input>
                    <Button>Sign In</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signup">Sign Up</Link>
                </footer>
            </div>
        </div>
    )
}
export default SignIn