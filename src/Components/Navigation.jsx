import React from "react";
import NavButton from "../assets/nav_switch.svg";

class Navigation extends React.Component {
    closeNav = () => {
        document.querySelector(".navigation__sidebar").style.width = 0;
        document.querySelector(".back-dim").style.visibility = "hidden";
        document.querySelector(".back-dim").style.opacity = 0;
    };

    render() {
        return (
            <div className="navigation">
                <div className="back-dim" />
                <nav className="navigation__sidebar">
                    <div className="navigation__top" onClick={this.closeNav}>
                        <input
                            className="nav-button"
                            type="image"
                            src={NavButton}
                            alt=""
                        />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
