import React, { Component } from 'react';
import Carlist from '../components/carlist'
import Navbar from "../components/navbar"
import Pagination from "../components/pagination"

class Cars extends Component {

    render() {
        return (
            <div>

                <Navbar></Navbar>
                <Pagination></Pagination>
                <Carlist>

                </Carlist>
            </div>
        );
    }
}

export default Cars;