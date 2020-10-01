import React from "react";
import { useMediaQuery } from "react-responsive";
import resumePdf from "../../Assets/files/MyResume.pdf"; // resume
import ResizableResume from "../pdfComponents/resizableResume";
import Button from "react-bootstrap/Button";
// Resume page.

function ResumePage() {
  // MediaQueries that determines what would be loaded in
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div className="container whiteBackground horizontalCenter">
      {isDesktopOrLaptop && (
      <object
        data={resumePdf}
        type="application/pdf"
        width="100%"
        height="900vh"
      >
        Pdf not found.
      </object>)}
      {isTabletOrMobileDevice && (
        <>
          {/** Empty tag to organize the code better (for the mobile view) **/}
          {/** Display a direct link to the pdf as well as the  **/}
          <ResizableResume />
          <Button variant="primary" id="whiteTextButton">
            <b>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                title="Download resume pdf"
                className="whiteTextButton"
              >
                Press here to download the pdf file.
              </a>
            </b>
          </Button>
        </>
      )}
    </div>
  );
}

export default ResumePage;
