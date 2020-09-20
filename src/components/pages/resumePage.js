import React from "react";
import resumePdf from "../../Assets/files/OldResume.pdf"

function ResumePage() {
  return (
    <div className="container whiteBackground">
      <embed src={resumePdf} type="application/pdf" width="100%" height="900vh" />
    </div>
  );
}

export default ResumePage;
