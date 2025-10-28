import { Link } from "react-router-dom"
import { useUserStore } from "../store/store"

const NavBar = () => {
    const { jwt } = useUserStore()
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">Marketplace</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link className="navbar-link" to={"/"}>Home</Link>
                    </li>
                    {jwt ? (
                        <>
                            <li>
                                <Link className="navbar-link" to={"/logout"}>Logout</Link>
                            </li>
                        </>
                    ) : (<Link className="navbar-link" to={"/signin"}>SignIn</Link>)}
                </ul>
            </div>
        </div>
    )
}
export default NavBar