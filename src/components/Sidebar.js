import React from 'react';
import './Sidebar.css';
import search from "../assets/search.png";
import otherProfiles from "../assets/otherProfiles.png";
import jeff from "../assets/jeff.png";
import shakira from "../assets/shakira.jpg";
import tick from "../assets/tick.png";
import google from "../assets/google.png";


const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="searchBar">
        <img className="mainTwitterImg searchImg" src={search} alt="" />
        <input
          className="mainTweets input"
          type="search"
          name=""
          placeholder="Search Twitter"
          id=""
        />
      </div>
      <div className="otherProfiles">
        <img className="otherProfile leftTop" src={otherProfiles} alt="" />
        <img className="otherProfile" src={otherProfiles} alt="" />
        <img className="otherProfile rightTop" src={otherProfiles} alt="" />
        <img className="otherProfile leftBottom" src={otherProfiles} alt="" />
        <img className="otherProfile" src={otherProfiles} alt="" />
        <img className="otherProfile rightBottom" src={otherProfiles} alt="" />
      </div>
      <div className="mightLike showMore">
        <h5 className="mightLike showMore">You might like</h5>
        <img className="miniProfile" src={jeff} alt="" />
        <div className="mainMiddle">
          <div className="aboutDiv">
            <h5 className="forMarginn">Jeff Bezos</h5>
            <img className="mainTwitterImg tickSide" src={tick} alt="" />
            <p className="mainTweets littleMargin">@JeffBezos</p>
          </div>
          <button className="followButton followMargin">Follow</button>
        </div>
        <img className="miniProfile" src={shakira} alt="" />
        <div className="mainMiddle">
          <div className="aboutDiv">
            <h5 className="forMarginn">Shakira</h5>
            <img className="mainTwitterImg tickSide" src={tick} alt="" />
            <p className="mainTweets littleMargin shakira">@shakira</p>
          </div>
          <button className="followButton followMargin">Follow</button>
        </div>
        <img className="miniProfile" src={google} alt="" />
        <div className="mainMiddle">
          <div className="aboutDiv">
            <h5 className="forMarginn">Google</h5>
            <img className="mainTwitterImg tickSide" src={tick} alt="" />
            <p className="mainTweets littleMargin shakira">@Google</p>
          </div>
          <button className="followButton followMargin">Follow</button>
        </div>
        <a className="aboutTwitter mainAbout showMore" href="">
          Show more
        </a>
      </div>
    </div>
  );
}

export default Sidebar