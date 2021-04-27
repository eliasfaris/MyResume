import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import './NavBar.css';


export class Navbar extends Component {


    render() {

        return (


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="MyResume">
                    <a class="navbar-brand">MyResume</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav >



        );
    }
}

export default Navbar;
