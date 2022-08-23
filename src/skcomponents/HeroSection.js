import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Video from "../videos/video-3.mov";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../../../static/videos/video-3.mov" autoPlay loop muted /> */}
      <video src={Video} alt="video" autoPlay loop muted />
      <h1>
        SOLUTION <span style={{ color: "rgb(255,69,0)" }}>HUB</span>{" "}
      </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="/Auth/SignInSide">
          <Button
            className="sbtn"
            buttonStyle="sbtn--outline"
            buttonSize="sbtn--large"
          >
            LOGIN
          </Button>
        </Link>
        <Link to="/Auth/SignUpSide">
          <Button
            className="sbtn"
            buttonStyle="sbtn--outline"
            buttonSize="sbtn--large"
          >
            SIGN UP
          </Button>
        </Link>

        {/* <Button
          className='sbtn'
          buttonStyle='sbtn--outline'
          buttonSize='sbtn--large'
        >
          REGISTER YOUR ORGANIZATION
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='sbtn-primary'
          buttonSize='sbtn-large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
      </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
