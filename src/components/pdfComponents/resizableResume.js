import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
import throttle from "lodash.throttle";
import ResumePdf from "../../Assets/files/MyResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // pdf worker needed to make react-pdf work

// Modified code from @lucasveigaf from this conversation about react-pdf resizing and 100% width
// Conversation here: https://github.com/wojtekmaj/react-pdf/issues/129
// Original raw code here: https://raw.githubusercontent.com/lucasveigaf/react-pdf-example/master/src/App.js

// NOTE 9/30/2020:
// Code is still using old "this" method to change state, suggest utilizing useState to refactor? (if I can figure how to change this class into a regular function)

class ResizableResume extends React.Component {
  constructor() {
    super();
    this.state = { width: null };
    this.throttledSetDivSize = throttle(this.setDivSize, 500);
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", this.throttledSetDivSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledSetDivSize);
  }

  setDivSize = () => {
    this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
  };

  render() {
    return (
      <div
        id="row"
        style={{
          height: "100%", // modified from 100vh to 100%
          width: "100%", // modified from 100vw to 100%
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/** Unnecessary div preventing the pdf from taking the size of the container **/}
        {/**<div id="placeholderWrapper" style={{ width: "10vw", height: "10vh" }} />**/}
        <div
          id="pdfWrapper"
          style={{ width: "90vw" }}
          ref={(ref) => (this.pdfWrapper = ref)}
        >
          <PdfComponent wrapperDivSize={this.state.width} />
        </div>
      </div>
    );
  }
}

class PdfComponent extends React.Component {
  render() {
    return (
      <div>
        <Document file={ResumePdf}>
          {/** pageIndex modified from 1 to 0 (there was an error, trust me.) **/}
          <Page pageIndex={0} width={this.props.wrapperDivSize} /> 
        </Document>
      </div>
    );
  }
}

export default ResizableResume;
