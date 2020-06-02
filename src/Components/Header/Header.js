import React, { Component } from 'react';
import './Css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="frontImage">
                    <div class="container">
                        <div class="contentInfo">
                            <h1>Welcome To Our Online Store</h1>
                            <p>Check out the list of products we offer.</p>
                        </div>
                        <div class="greenBox">
                            <p>Dolphin Rescue</p>
                        </div>
                    </div>
                </section>

                <section id="productContent">
                    <h2>Take some time to review the list below.</h2>
                    <p>We have a variety of necklaces, paintings, braceletes, dolphin figures, lamps and more. We hope to serve you in the best way we can.</p>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;