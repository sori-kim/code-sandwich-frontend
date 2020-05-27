import React from "react";
import Header from "../../components/Header/Header";
import MenuSection from "../Main/MenuSection/MenuSection";
import Event from "./Event/Event"
import Footer from "../../components/Footer/Footer";
import "./Main.scss";
import AutoPlay from "./AutoPlay/AutoPlay";

class Main extends React.Component {
  render() {
    return (
        <>
         <Header />
         <div className="Main">
          <AutoPlay />
          <MenuSection />
          <Event />
         </div>
         <Footer />
        </>
    );
  }
}

export default Main;
