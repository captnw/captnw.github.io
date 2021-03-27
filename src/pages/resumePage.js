import React from "react";
import { useMediaQuery } from "react-responsive";
import resumePdf from "../Assets/files/WilliamNguyenResume.pdf"; // resume
import ResizableResume from "../components/pdfComponents/resizableResume";
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
    <div className="container whiteBackground horizontalCenter fullHeight">
      {isDesktopOrLaptop && (
        <object
          data={resumePdf}
          type="application/pdf"
          className="fullWide fullHeight"
        >
          Pdf not found.
        </object>
      )}
      {isTabletOrMobileDevice && (
        <>
          {/** Empty tag to organize the code better (for the mobile view) **/}
          {/** Display a direct link to the pdf as well as the  **/}
          <button type="button" className="btn btn-primary isolatedButton">
            <b>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                title="Download resume pdf"
                className="whiteTextButton"
              >
                Download the resume pdf file
              </a>
            </b>
          </button>
          <ResizableResume resume={resumePdf}/>
        </>
      )}
    </div>
  );
}

export default ResumePage;
