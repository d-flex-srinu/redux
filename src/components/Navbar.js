import React from "react";
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">{props.title}</a>
            {/* <Link className="navbar-brand" to="/home">{props.title}</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="/home">Home <span className="sr-only"></span></a>
                        {/* <Link className="nav-link" to="/home">Home <span className="sr-only"></span></Link> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">{props.about}</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// Navbar.defaultProps =  {
//     title: 'Set title here',
//     about : 'set about here'
// }