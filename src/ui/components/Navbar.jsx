import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Animes">Animes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Comics">Comics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/LogOut">LogOut</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
