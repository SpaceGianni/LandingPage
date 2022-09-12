import React from 'react';
import PropTypes from "prop-types";


const Nabvar= (props)=> {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark  col-md-12 px-5">
        <div className="container-fluid mx-5">
            <a className="navbar-brand d-flex align-items-center" href= {props.brandUrl} target="_blank">{props.brandTitle}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 dropdown-menu-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">{props.navItem1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.navItem2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.navItem3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.navItem4}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)};

Navbar.propTypes = {
brandTitle : PropTypes.string,
brandUrl:  PropTypes.string,
navItem1: PropTypes.string,
navItem2:PropTypes.string,
navItem3:PropTypes.string,
navItem4:PropTypes.string

};


<Navbar 
brandTitle= "Start Bootstrap" 
brandUrl="https://getbootstrap.com/"
navItem1="Home"
navItem2 ="About"
navItem3 ="Services"
navItem4="Contact"
/>
