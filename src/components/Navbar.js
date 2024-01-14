import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

//command:- rfc
//command:-impt

//for a dark navbar do:- "navbar navbar-expand-lg navbar-dark bg-dark"

//to apply state of navbar from App.js write whole className={} to make it js of nav tag accordingly in js using backticks ('`') to use template-literals using ${} to make use of the variables

// At line33 made clever use of ternary operator to set mode of the text accordingly

//Use "Link" instead of <a></a> tag and to="" instead of href="" to use react router dom.

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
          </form>*/}

        {/* used bootstrap switch down below */}
          
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Lighting</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

// remember this exact syntax like "component.propTypes"
// isRequired means that prop cannot be empty or undefined

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
}


//default props

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}