import React from 'react';
import PropTypes from "prop-types";


const Navbar= ({navbar})=> {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark  col-md-12 px-5 fixed-top">
        <div className="container-fluid mx-5">
            <a className="navbar-brand d-flex align-items-center" href= "/#" target="_blank">{navbar.logo}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 dropdown-menu-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={navbar.options.link}>{navbar.options.label}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={navbar.options.link}>{navbar.options.label}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={navbar.options.link}>{navbar.options.label}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={navbar.options.link}>{navbar.options.label}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)};

Navbar.propTypes = {
    navbar: PropTypes.object.isRequired,
}

export default Navbar;