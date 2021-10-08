import React from "react";
import '../css/tag.css'

function Tag(props) {
  let deleteComp = '';

  if(props.postOrNot === false) {
    deleteComp = <span className="deleteTag" onClick={() => props.deleteTag(props.tagId)}>X</span>;
  }

  return (
    <span className="savedTag">
      <span className="tagContent">{props.tag}</span>
      {deleteComp}
    </span>
  );
}

export default Tag;
