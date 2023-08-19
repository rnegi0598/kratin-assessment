import React from "react";
import typewriterImg from "../assets/typewriter.jpg";
import grannyImg from "../assets/granny-1.jpg";
import boyImg from "../assets/boy-writing.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
        <div>
          <h2>Because</h2>

          <p className="para-one">
            <FormatQuoteIcon sx={{ mr: 1, fontSize: 50 }} />
            Every whispered memory deserves to be transformed into a beautiful
            story.
            <FormatQuoteIcon sx={{ ml: 1, fontSize: 50 }} />
          </p>         
        </div>
      </div>
    </div>
  );
};

export default Hero;
