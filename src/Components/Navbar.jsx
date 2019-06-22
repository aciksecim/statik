import React from "react";
import Logo from "../assets/navbar_logo.svg";
import NavButton from "../assets/nav_switch.svg";

class Navbar extends React.Component {
    openNav = () => {
        document.querySelector(".navigation__sidebar").style.width = "60vw";
        document.querySelector(".back-dim").style.visibility = "visible";
        document.querySelector(".back-dim").style.opacity = 1;
    };

    render() {
        return (
            <div className="navbar">
                <img className="navbar__logo" src={Logo} alt="Açıkseçim Logo" />
                <input
                    className="nav-button"
                    type="image"
                    src={NavButton}
                    alt=""
                    onClick={this.openNav}
                />
                <ul className="navbar-desk-menu">
                   <li>Biz kimiz?</li>
                   <li>Nasıl çalışır?</li>
                   <li>Gönüllü ol!</li>
                   <li>Sorun bildir</li>
                   <li>Davet et</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
