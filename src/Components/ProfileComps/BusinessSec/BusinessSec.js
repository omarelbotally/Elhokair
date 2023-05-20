import React from "react";
import "./BusinessSec.css";
const BusinessSec = (props) => {
  return (
    <div className="my-5">
      <h3>Business</h3>
      <div
        dangerouslySetInnerHTML={{ __html: props.content }}
        className="html-converted-txt"
      />
    </div>
  );
};

export default BusinessSec;
