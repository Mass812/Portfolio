import React from "react";
import "./Bio.scss";

const Bio = () => {
  return (
    <div className="bio-wrapper">
      <div className="bio-parent">
        <div className="bio-title-area">
          <div className="bio-main-title">Short Bio</div>
          <div className="bio-subtitle">& Hobbies Coming Soon . . . </div>
        </div>
        <div>
          Drawing
          <hr />
          <div>Drawing Examples</div>
        </div>
        <br />
        <div>
          Music
          <hr />
          <div>Song Writing / Composing / Singing Examples</div>
        </div>
        <br />
        <div>
          Reading
          <hr />
          <div>BookList</div>
        </div>
        <br />
        <div>
          Coding
          <hr />
          <div>Languages, Frameworks, Favorites</div>
        </div>
        <br />
        <div>
          Family
          <hr />
          <div>The most amazing surprises ever</div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Bio;
