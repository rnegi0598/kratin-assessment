import React from "react";
import typewriterImg from "../assets/typewriter.jpg";
import grannyImg from "../assets/granny-1.jpg";
import boyImg from "../assets/boy-writing.jpg";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="main-grid">
      <h1>Capturing Lifetimes of Wisdom Through Words</h1>
      <div className="img-1">
        <img src={typewriterImg} alt="typewriter" />
      </div>
      <div className="img-2">
        <img src={grannyImg} alt="granny" />
      </div>
      <div className="img-3">
        <img src={boyImg} alt="boy" />
      </div>
      <div className="para">
        <div className="step-1">
          <h2>Step 1</h2>
          <p>Your Story, Your Legacy: Share Your Experiences</p>        
        </div>
        <div className="step-2">
          <h2>Step 2</h2>
          <p>Crafted with Care: Hire a Pro to Chronicle Your Journey</p>        
        </div>
      </div>
    </div>
  );
};

export default Hero;
