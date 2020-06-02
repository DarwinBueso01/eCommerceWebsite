import React, { Component } from 'react';
import './Css/Navbar.css';



class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>

                <nav id="navbar">
                    <div class="container1">
                        <h1 class="logo">DR</h1>
                        <ul>
                            <li><a href="../eCommerceWebsite/contact.html">Contact</a></li>
                            <li><a href="../eCommerceWebsite/product.html">Products</a></li>
                            <li><a href="../eCommerceWebsite/home.html">Home</a></li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        )
    }
}

export default Navbar;