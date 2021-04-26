import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

export class Navbar extends Component {


    render() {

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    Student
                </li>
            </ul>
        );

        return (

            <nav class="navbar" style="background-color: #9b59b6;">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">
                            MyResume
                        </a>
                    </div>
                    {guestLinks}
                </div>
            </nav>


        );
    }
}

export default Navbar;
