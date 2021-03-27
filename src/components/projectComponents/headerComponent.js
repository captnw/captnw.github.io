import React from "react";

// This header manages the header info for every project (title, last updated date, and version)
function HeaderComponent(props) {
  const title = props.title;
  const date = props.date;
  const version = props.version;
  const status = props.status;

  return (
    <>
      <i>
        <h2 className="orangeText thicker noPaddingBottom">{title}</h2>
      </i>
      <p className="noPaddingBottom">
        {status === "Last updated" && (
          <span className="badge bg-warning">Last updated</span>
        )}
        {status === "Released" && (<span className="badge bg-success">Released</span>)}
        <span className="badge bg-secondary">{date}</span>
      </p>
      <p className="noPaddingBottom">
        <span className="badge bg-dark">Version</span>
        <span className="badge bg-secondary">{version}</span>
      </p>
    </>
  );
}

export default HeaderComponent;
