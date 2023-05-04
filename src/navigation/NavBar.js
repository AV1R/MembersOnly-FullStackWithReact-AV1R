import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => (

    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4 m-1">Members Only App</span>
      </Link>
      <ul className="nav nav-pills">
        {/* <li className="nav-item"><Link to='/' className="nav-link active" aria-current="page">Home</Link></li> */}
      </ul>
    </header>

)
