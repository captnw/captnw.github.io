import { Document, Page, pdfjs } from "react-pdf";
import React, { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import ResumePdf from "../../Assets/files/MyResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // pdf worker needed to make react-pdf work

// Modified code from @lucasveigaf from this conversation about react-pdf resizing and 100% width
// Conversation here: https://github.com/wojtekmaj/react-pdf/issues/129
// Original raw code here: https://raw.githubusercontent.com/lucasveigaf/react-pdf-example/master/src/App.js

// NOTE 10/29/2020:
// Rewrote the class into a function by utilizing react hooks instead

function ResizableResume(props) {
  const [width, setDivSize] = useState(null);
  let throttledSetDivSize = throttle(setDivSize, 500);
  let pdfWrapper = null;

  useEffect(() => {
    // Acts the same as componentDidMount
    setDivSize(pdfWrapper.getBoundingClientRect().width);
    window.addEventListener("resize", throttledSetDivSize);

    // Specify how to clean up after this effect:
    // The return function acts the same as componentWillUnmount
    return function cleanup() {
      window.removeEventListener("resize", throttledSetDivSize);
    };
  }, [pdfWrapper, throttledSetDivSize]);

  return (
    <div
      id="row"
      className="fullishHeight fullWide"
      style={{
        width: "100%", // modified from 100vw to 100%
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/** Unnecessary div preventing the pdf from taking the size of the container **/}
      {/**<div id="placeholderWrapper" style={{ width: "10vw", height: "10vh" }} />**/}
      <div
        id="pdfWrapper"
        style={{ width: "100%" }}
        ref={(ref) => (pdfWrapper = ref)}
      >
        <PdfComponent wrapperDivSize={width} />
      </div>
    </div>
  );
}

function PdfComponent(props) {
  return (
    <div>
      <Document file={ResumePdf}>
        {/** pageIndex modified from 1 to 0 (there was an error, trust me.) **/}
        <Page pageIndex={0} width={props.wrapperDivSize} />
      </Document>
    </div>
  );
}

export default ResizableResume;
