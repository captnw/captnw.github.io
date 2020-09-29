import React from "react";
import resumePdf from "../../Assets/files/MyResume.pdf";

function ResumePage() {
  return (
    <div className="container whiteBackground horizontalCenter">
      <object
        data={resumePdf}
        type="application/pdf"
        width="100%"
        height="900vh"
      >
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can
          <a href={resumePdf}>click here to download the pdf file.</a>
        </p>
      </object>
    </div>
  );
}

export default ResumePage;
