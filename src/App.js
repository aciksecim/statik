import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import BizKimiz from "./Components/BizKimiz";
import Navigation from "./Components/Navigation";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Navigation />
                <Header />
                <BizKimiz />
            </div>
        );
    }
}

export default App;
