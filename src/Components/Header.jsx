import React from "react";
import PlayBadge from "../assets/play-badge.svg";
import iOSBadge from "../assets/appstore-badge.svg";
import Arrow from "../assets/arrow.svg";
import { scroller } from "react-scroll";

class Header extends React.Component {
    scrollDown() {
        scroller.scrollTo("biz-kimiz", { duration: 500, smooth: true });
    }
    render() {
        return (
            <header className="header">
                <h1 className="header__heading">
                    Seçim sonuçlarını hep birlikte takip edelim!
                </h1>
                <div className="badges badges--header">
                    <a class="badges__ios" href="">
                        <img class="badge-ios" src={iOSBadge} alt="App Store" />
                    </a>
                    <a class="badges__ios" href="">
                        <img
                            class="badge-play"
                            src={PlayBadge}
                            alt="Google Play"
                        />
                    </a>
                </div>
                <img
                    className="arrow"
                    src={Arrow}
                    alt=""
                    onClick={this.scrollDown}
                />
            </header>
        );
    }
}

export default Header;
