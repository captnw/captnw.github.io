import React from "react";

// TagComponent manages the tags bar for any image/media
function TagComponent(props) {
  const tagList = props.tagList;
  let tagComponentList = [];
  for (var i = 0; i < tagList.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    tagComponentList.push(
      <li key={i.toString()}>
        <Tag tagName={tagList[i]}/>
      </li>
    );
  }

  return (
    <div className="noPaddingBottom">
      <h6>
        <ul className="horizontalCenter horizontalList">{tagComponentList}</ul>
      </h6>
    </div>
  );
}

// A simple tag with an option for a divider
function Tag(props) {
  const tagName = props.tagName;

  return (
    <>
      <span className="badge bg-secondary tag">{tagName}</span>
    </>
  );
}

export default TagComponent;