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
import Urban from "./Pages/Urban";
import AdminPanel from "./Pages/AdminPanel";
import AdminLogin from "./component/AdminLogin/AdminLogin";
import test from "./Pages/Teest";

export class App extends Component {
  state = {
    Facesimages: [],
    Miscimages: [],
    images: [],
    selectedImage: null,
    imageId: "",
    imageKey: null,
    welcome: true,
    modelImages: [],
    successPost: false,
  };

  addImage = async (e) => {
    try {
      const body = new FormData();
      body.append("image", e.image);
      const response = await fetch(
        `http://localhost:3000/${e.cat}/post?description=${e.des}&title=${e.title}`,
        { method: "POST", body }
      );
      const results = await response.json();
      if (results.success) {
        this.setState({ successPost: true });
        console.log(results.result);
      } else {
        this.setState({ error_message: results.message });
      }
    } catch (e) {
      console.log(e);
    }
  };

  adminImages = async (e) => {
    const facesResponse = await fetch("http://localhost:3000/faces/get");
    const facesResult = await facesResponse.json();
    this.setState({ Facesimages: facesResult });
    const misceResponse = await fetch("http://localhost:3000/misce/get");
    const misceResult = await misceResponse.json();
    this.setState({ Miscimages: misceResult });
    const urbanResponse = await fetch("http://localhost:3000/urban/get");
    const urbanResult = await urbanResponse.json();
    this.setState({ images: urbanResult });
  };
  ShowScrollbar() {
    var style = document.createElement("style");
    style.innerHTML = `body{overflow-y:scroll;}`;
    document.head.appendChild(style);
  }

  delete = async (e) => {
    const id = e.target.id;
    const cat = e.target.value;
    console.log(id);
    console.log(e.target.cat);
    await fetch(`http://localhost:3000/${cat}/delete?imageName=${id}`, {
      method: "DELETE",
    });
  };
  select = async (event) => {
    await this.setState({ selectedImage: event.target.src });
    await this.setState({ imageId: event.target.id });
  };
  Faces = async (e) => {
    const response = await fetch("http://localhost:3000/faces/get");
    const result = await response.json();
    const sortedResult = await result.sort((a, b) => b.time - a.time);
    // console.log(result);
    await this.setState({ Facesimages: sortedResult });
    await this.setState({ modelImages: sortedResult });
  };
  Misc = async (e) => {
    const response = await fetch("http://localhost:3000/misce/get");
    const result = await response.json();
    await this.setState({ Miscimages: result, modelImages: result });
    // await this.setState({ modelImages: result });
  };
  // Urban = async (e) => {
  //   await this.setState({ images: imagesList.listC });
  //   this.setState({ modelImages: this.state.images });
  // };
  Urban = async (e) => {
    const response = await fetch("http://localhost:3000/urban/get");
    const result = await response.json();
    await this.setState({ images: result, modelImages: result });
    // this.setState({ modelImages: this.state.images });
  };
  handleClick = (e) => {
    this.setState({ selectedImage: null });
    this.ShowScrollbar();
  };

  componentDidMount() {
    // this.setState({ images: imagesList.listA });
    // if (this.state.images == null) {
    //   this.setState({ images: imagesList.listC });
    //   // this.setState({ modelImages: this.state.images });
    // }
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
          <Route path="/test" component={test} />
          <Route
            exact
            path="/"
            render={(props) => <Welcome welcome={this.welcome} />}
          />
          {this.state.images ? (
            <Route
              path="/Urban"
              render={(props) => (
                <Urban
                  select={this.select}
                  images={this.state.images}
                  Misc={this.Misc}
                  Urban={this.Urban}
                  cat="Urban"
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
                cat="Faces"
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
                cat="Misce"
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
          <Route
            path="/AdminPanel"
            render={(props) => (
              <AdminPanel
                addImage={this.addImage}
                urbanImages={this.state.images}
                facesImages={this.state.Facesimages}
                miscImages={this.state.Miscimages}
                adminImages={this.adminImages}
                delete={this.delete}
                successPost={this.state.successPost}
              />
            )}
          />
          <Route path="/AdminLogin" component={AdminLogin} />

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
