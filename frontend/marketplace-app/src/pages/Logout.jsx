import { useEffect } from "react"
import { useUserStore } from "../store/store"
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { clearJWT } = useUserStore()
    const navigate = useNavigate()
    useEffect(() => {
        clearJWT()
        navigate("/")
    }, [])
    return (
        <h1>Logout</h1>
    )
}
export default Logout