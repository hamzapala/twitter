import React from 'react';
import './Main.css';
import left from "../assets/left.png";
import tick from "../assets/tick.png";
import kapak from "../assets/kapak.png";
import mainProfile from "../assets/mainProfile.png";
import more from "../assets/more.png";
import map from "../assets/map.png";
import chain from "../assets/chain.png";
import balloon from "../assets/balloon.png";
import calendar from "../assets/calendar.png";
import people from "../assets/people.png";
import retweet from "../assets/retweet.png";
import mic from "../assets/mic.png";
import triplePoint from "../assets/triplePoint.png";
import heart from "../assets/heart.png";

const Main = () => {
  return (
    <div className="main">
      <div className="afterMain">
        <div className="navbarNameContainer">
          <img className="mainBackImg" src={left} alt="" />
          <div>
            <h4>Twitter</h4>
            <p className="mainTweets">15K Tweets</p>
          </div>
          <img className="mainTwitterImg" src={tick} alt="" />
        </div>
        <img className="kapak" src={kapak} alt="" />
        <div className="mainMiddle">
          <img className="mainProfile" src={mainProfile} alt="" />
          <div className="mainRight">
            <img className="navbarNameImg mainMore" src={more} alt="" />
            <button className="followButton">Follow</button>
          </div>
        </div>
        <div className="navbarNameContainer">
          <div>
            <h4>Twitter</h4>
            <p className="mainTweets">@Twitter</p>
          </div>
          <img className="mainTwitterImg" src={tick} alt="" />
        </div>
        <h6>What's happening?!</h6>
        <div className="aboutDiv">
          <img className="navbarNameImg mainMore dimension" src={map} alt="" />
          <p className="mainAbout">everywhere</p>
          <img
            className="navbarNameImg mainMore dimension"
            src={chain}
            alt=""
          />
          <a
            className="aboutTwitter mainAbout"
            target="blank"
            href="https://about.twitter.com/tr"
          >
            about.twitter.com
          </a>
          <img
            className="navbarNameImg mainMore dimension"
            src={balloon}
            alt=""
          />
          <p className="mainAbout">Born March 21</p>
        </div>
        <div className="calendarDiv">
          <img
            className="navbarNameImg mainMore dimension"
            src={calendar}
            alt=""
          />
          <p className="mainAbout">Joined February 2007</p>
        </div>
        <div className="aboutDiv">
          <p className="mainAbout">
            <span>0</span> Following
          </p>
          <p className="mainAbout">
            <span>61.9M</span> Followers
          </p>
        </div>
        <div className="aboutDiv">
          <img className="people" src={people} alt="" />
          <p className="mainAbout">
            Followed by con şahin, Pusholder, and 21 others you follow
          </p>
        </div>
        <div className="titleDiv">
          <p className="mainTitle">Tweets</p>
          <p className="mainTitle">Tweets & replies</p>
          <p className="mainTitle">Media</p>
          <p className="mainTitle">Likes</p>
        </div>
      </div>
      <div className="afterMain">
        <div className="aboutDiv">
          <img
            className="navbarNameImg mainMore retweetedPic"
            src={retweet}
            alt=""
          />
          <p className="mainAbout">Twitter Retweeted</p>
        </div>
        <img className="miniProfile" src={mic} alt="" />
        <div className="mainMiddle">
          <div className="aboutDiv">
            <h5 className="forMargin">Spaces</h5>
            <img className="mainTwitterImg tickBottom" src={tick} alt="" />
            <p className="mainAbout twitterSpaces">@TwitterSpaces · May 18</p>
          </div>
          <img
            className="navbarNameImg mainMore tickBottom"
            src={triplePoint}
            alt=""
          />
        </div>
        <h6 className="forMargin twitterSpacesExplanation">
          Twitter Spaces are real live audio convos you can join from your
          couch. or the dog park. or the bathtub. wherever you are, really.
        </h6>
        <img className="mainPic" src={heart} alt="" />
      </div>
    </div>
  );
}

export default Main