import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark custom-navbar py-4"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#07122b",
      }}
    >
      <div className="container">
       <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">
  ABU-HAMMAD HACK CLUB
</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4">
 <li className="nav-item">
    <Link className="nav-link" to="/">
      Home
    </Link>
  </li>

            <li className="nav-item">
          <Link className="nav-link" to="/about">
  About
</Link>
            </li>

            <a className="nav-link" href="/#learn">
  Learn
</a>

            <li className="nav-item">
            <a className="nav-link" href="/#projects">
  Projects
</a>
            </li>
          </ul>
        </div>

       <a href="/#join" className="join-btn text-decoration-none">
  JOIN SPACE
</a>
      </div>
    </nav>
  );
}

export default Navbar;