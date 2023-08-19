import React from "react";
import "./story.scss";
const Story = ({ title, author ,img}) => {
  return (
    <div className="story-wrapper grid-item">
      <div className="img-wrapper">
        <img src={img} alt={author} />
      </div>

      <div className="para-wrapper">
        <p className="title">{title}</p>
        <p className="author"> - {author}</p>
      </div>
    </div>
  );
};

export default Story;
