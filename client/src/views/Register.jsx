import React, { Component } from 'react';

import Navbar from "../components/navbar"
import RegisterForm from "../components/registerform"

class Cars extends Component {
    render() {
        return (
            <div>

                <Navbar></Navbar>

                <h1>Register</h1>
                <RegisterForm></RegisterForm>
            </div>
        );
    }
}

export default Cars;