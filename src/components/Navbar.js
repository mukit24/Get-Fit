import React from 'react'
import Logo from '../assets/images/main_logo.png';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">
                    <img src={Logo} alt="gym_logo" width='35' />
                    <span className='px-2 fw-bold h4 text-dark'>GET FIT</span>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#exercise">Exercise</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar