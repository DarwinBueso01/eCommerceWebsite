import React, {Component} from 'react';
import './Css/Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <React.Fragment>
                <footer id="footer">
                    <p>| Dolphin Rescue | &copy; 2020, All Rights Reserved</p>
                    <a href="https://www.facebook.com/profile.php?id=100009827972169&ref=bookmarks" class="fa fa-facebook"></a>
                    <a href="https://twitter.com/explore" class="fa fa-twitter"></a>
                    <a href="https://www.instagram.com/darwin02504/" class="fa fa-instagram"></a>
                    <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;