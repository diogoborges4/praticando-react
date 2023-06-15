import "./Navbar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="home">
         <Link to={"/"}>
            Home
         </Link>
         <Link to={"/about"}>
            Sobre
         </Link>
    </div>
  )
}

export default NavBar