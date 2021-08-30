import React, { Component } from "react";
import './Student.css';
import logo from './images/logo.png'


export default class Welcome extends Component {
    render() {

        document.title = 'Welcome'

        return (
            <center>
                <img src={logo} />
            </center>

        );
    }
}