import React from "react";
import "./Navbar.css";
import twitter from "../assets/twitter.png";
import home from "../assets/home.png";
import hash from "../assets/hash.png";
import ring from "../assets/ring.png";
import envelope from "../assets/envelope.png";
import bookmark from "../assets/bookmark.png";
import list from "../assets/list.png";
import profile from "../assets/profile.png";
import more from "../assets/more.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={twitter} alt="" />
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={home} alt="" />
        <p className="navbarName">Home</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={hash} alt="" />
        <p className="navbarName">Explore</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={ring} alt="" />
        <p className="navbarName">Notifications</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={envelope} alt="" />
        <p className="navbarName">Messages</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={bookmark} alt="" />
        <p className="navbarName">Bookmarks</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={list} alt="" />
        <p className="navbarName">Lists</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={profile} alt="" />
        <p className="navbarName">Profile</p>
      </div>
      <div className="navbarNameContainer">
        <img className="navbarNameImg" src={more} alt="" />
        <p className="navbarName">More</p>
      </div>
      <div className="navbarNameContainer">
        <button className="button">Tweet</button>
      </div>
    </div>
  );
};

export default Navbar;
