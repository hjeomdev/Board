import React from "react";
import '../css/tag.css'

function Tag(props) {
  return (
    <span className="tag">
      <span className="content">{props.tag}</span>
    </span>
  );
}

export default Tag;
