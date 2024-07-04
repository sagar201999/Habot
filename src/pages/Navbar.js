import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg py-4">
            <div class="container">
                <a class="navbar-brand" href="#Home">
                    <img src='../../assets/habot-logo.jpg' alt='logo' className='logo' />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-4">
                            <a class="nav-link fs-18px active" aria-current="page" href="#suppliers">Find Suppliers</a>
                        </li>
                        <li class="nav-item me-4 dropdown">
                            <a class="nav-link fs-18px dropdown-toggle" href="#service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Find Service Tags
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#a">Action</a></li>
                                <li><a class="dropdown-item" href="#b">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#c">Something else here</a></li>
                            </ul>
                        </li>
                        <div>
                            <button className='login-btn fw-bold'>Login / Sign Up</button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;