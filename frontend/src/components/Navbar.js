import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

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

            // <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            //     <div className="container">
            //         <button
            //             className="navbar-toggler"
            //             type="button"
            //             data-toggle="collapse"
            //             data-target="#navbarTogglerDemo01"
            //             aria-controls="navbarTogglerDemo01"
            //             aria-expanded="false"
            //             aria-label="Toggle navigation"
            //         >
            //             <span className="navbar-toggler-icon" />
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            //             <a className="navbar-brand" href="/">
            //                 MyResume
            //             </a>
            //         </div>
            //         {guestLinks}
            //     </div>
            // </nav>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                < a class="navbar-brand" href="#" > Navbar</a >
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav >


        );
    }
}

export default Navbar;
