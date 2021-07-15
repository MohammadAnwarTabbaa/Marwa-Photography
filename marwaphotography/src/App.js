import React, { Component } from "react";
import "./App.css";
import Image from "./Image/Image";
import Nav from "./component/Nav";
import imagesList from "./image.json";
import Modal from "./Modal/Modal";
import Welcome from "./component/Welcome/Weclome";
import { withRouter, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/ContactUs";
import Faces from "./Pages/Faces";
import Miscellaneous from "./Pages/Miscellaneous";

export class App extends Component {
  state = {
    Facesimages: [],
    Miscimages: [],
    images: null,
    selectedImage: null,
    imageId: null,
    imageKey: null,
    welcome: true,
    modelImages: [],
  };
  ShowScrollbar() {
    var style = document.createElement("style");
    style.innerHTML = `body{overflow-y:scroll;}`;
    document.head.appendChild(style);
  }

  select = (event) => {
    this.setState({ selectedImage: event.target.src });
    this.setState({ imageId: event.target.id });
  };
  Faces = async (e) => {
    await this.setState({ Facesimages: imagesList.listA });
    this.setState({ modelImages: this.state.Facesimages });
  };
  Misc = async (e) => {
    await this.setState({ Miscimages: imagesList.listB });
    this.setState({ modelImages: this.state.Miscimages });
  };
  Urban = async (e) => {
    await this.setState({ images: imagesList.listC });
    this.setState({ modelImages: this.state.images });
  };
  handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      this.setState({ selectedImage: null });
      this.ShowScrollbar();
    }
  };

  componentDidMount() {
    // this.setState({ images: imagesList.listA });
    if (this.state.images == null) {
      this.setState({ images: imagesList.listC });
      this.setState({ modelImages: this.state.images });
    }
  }
  render() {
    let model = null;
    if (this.state.selectedImage) {
      model = (
        <Modal
          list={this.state.modelImages}
          selectedImage={this.state.selectedImage}
          imageId={this.state.imageId}
          handleClick={this.handleClick}
          // showHideScrollbar={this.HideScrollbar("show")}
          // HideScrollbar={this.HideScrollbar("none")}
        />
      );
    }
    let nav = null;
    if (this.state.welcome == true) {
      nav = (
        <Nav
        // Faces={this.Faces}
        // Misc={this.Misc}
        // Urban={this.Urban}
        // showHideScrollbar={this.HideScrollbar("show")}
        // HideScrollbar={this.HideScrollbar("none")}
        />
      );
    }
    return (
      // <Nav Faces={this.Faces} />
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome welcome={this.welcome} />}
          />
          {this.state.images ? (
            <Route
              path="/Main"
              render={(props) => (
                <Main
                  select={this.select}
                  images={this.state.images}
                  Misc={this.Misc}
                  Urban={this.Urban}
                  {...props}
                />
              )}
            />
          ) : (
            ""
          )}
          {/* {this.state.Facesimages ? ( */}
          <Route
            path="/Faces"
            render={(props) => (
              <Faces
                select={this.select}
                images={this.state.Facesimages}
                Faces={this.Faces}
                {...props}
              />
            )}
          />
          {/* ) : (
            ""
          )} */}
          <Route
            path="/Misc"
            render={(props) => (
              <Miscellaneous
                select={this.select}
                images={this.state.Miscimages}
                Misc={this.Misc}
                {...props}
              />
            )}
          />
          {/* ) : (
            ""
          )} */}

          {/* <Route path="/Main" component={Main} /> */}
          <Route path="/About" component={AboutUS} />
          <Route path="/ContactUs" component={ContactUs} />
          {/* <Image select={this.state.selectedImage} images={this.state.images} />
        {model} */}
          {/* <Welcome /> */}
        </Switch>
        {model}
      </>
      //   <>
      //   <Image select={this.select} images={this.state.images} />
      //   {model}
      // </>
    );
  }
}

export default withRouter(App);
