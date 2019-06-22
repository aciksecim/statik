import React from "react";
import NavButton from "../assets/nav_switch.svg";
import PlayBadge from "../assets/play-badge.svg";
import iOSBadge from "../assets/appstore-badge.svg";

class Navigation extends React.Component {
    closeNav = () => {
        document.querySelector(".navigation__sidebar").style.width = 0;
        document.querySelector(".back-dim").style.visibility = "hidden";
        document.querySelector(".back-dim").style.opacity = 0;
    };

    render() {
        return (
            <div className="navigation">
                <div className="back-dim" onClick={this.closeNav} />
                <nav className="navigation__sidebar">
                    <div className="navigation__top" onClick={this.closeNav}>
                        <input
                            className="nav-button"
                            type="image"
                            src={NavButton}
                            alt=""
                        />
                    </div>
                    <ul className="navigation__navlist">
                        <li>
                            <a href="">Biz kimiz?</a>
                        </li>
                        <li>
                            <a href="" />
                        </li>
                        <li>
                            <a href="" />
                        </li>
                        <li>
                            <a href="" />
                        </li>
                        <li>
                            <a href="" />
                        </li>
                        <li>
                            <a href="" />
                        </li>
                    </ul>
                    <div className="badges badges--nav">
                        <a class="badges__ios" href="">
                            <img
                                class="badge-ios"
                                src={iOSBadge}
                                alt="App Store"
                            />
                        </a>
                        <a class="badges__ios" href="">
                            <img
                                class="badge-play"
                                src={PlayBadge}
                                alt="Google Play"
                            />
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
