import React from "react";
import '../css/tag.css'

function Tag(props) {
  return (
    <span className="savedTag">
      <span className="tagContent">{props.tag}</span>
      <span className="deleteTag" onClick={() => props.deleteTag(props.tagId)}>x</span>
    </span>
  );
}

export default Tag;
