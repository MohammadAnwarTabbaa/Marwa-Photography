import React from "react";
import "./About.css";

const about = () => {
  return (
    <div className="about-body">
      <div className="about-wrapper">
        <div className="left-side">
          <h1 className="title">Biography</h1>
          <article class="about-text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
            <br />
            <br />
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </article>
        </div>
        <div className="right-side">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="example"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default about;
