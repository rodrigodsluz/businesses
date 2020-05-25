import React, { Fragment } from "react";
import HeaderBottom from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import ContactArea from "../../../components/ContactArea";
import FooterArea from "../../../components/FooterArea";
import SearchBar from "../../../components/SearchBar";
import ImageList from "../../../components/SearchBar/imageList";
import logo from "../../../images/logo/matheus-drunk.jpeg";

/* const images = [
  { src: "./assets/bolsonaro.jpg" },
  //   { src: "./assets/image02.jpg" },
  //   { src: "./assets/image03.jpg" },
  //   { src: "./assets/image04.jpg" },
  //   { src: "./assets/image05.jpg" },
]; */

class MainPage extends React.Component {
  state = { images: [] };

  onSearchSubmit = () => {
    this.setState({ images: <img src={logo} alt="aa" /> });
  };

  render() {
    return (
      <Fragment>
        <header className="headerArea">
          {/* <HeaderTop className="headerTop" /> */}
          <HeaderBottom className="headerBottomArea" />
        </header>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>

        <ContactArea className="contactArea" />
        <FooterArea />
      </Fragment>
    );
  }
}

export default MainPage;
