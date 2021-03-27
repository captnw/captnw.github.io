import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react";

// Image gallery, pass in an array of images and this would allow you to alternate between them
// with a previous and next button.

function GalleryComponent(props) {
  const images = props.images;
  const [image_ind, setInd] = useState(0);
  const images_len = images.length;

  let dotComponentList = []; // the dots that represents each media
  if (images_len >= 2) {
    // only create dotComponentList if there are more than 2 images
    for (var i = 0; i < images_len; i++) {
      var dotToPush;
      if (image_ind === i) {
        dotToPush = <Dot isActive="true" />;
      } else {
        dotToPush = <Dot isActive="false" />;
      }
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      dotComponentList.push(<li key={i.toString()}>{dotToPush}</li>);
    }
  }

  return (
    <>
      <div className="horizontalCenter noPaddingBottom">
        <div className="containerImage">
          <Image
            src={images[image_ind]}
            alt={"Image " + image_ind.toString()}
            className="fullWide noPaddingBottom imgGreyRoundedBorder"
            rounded
          />
          {/** Only include gallery feature if there is more than 1 image. **/}
          {images_len >= 2 && (
            <>
              <button
                active="true"
                className="btn btn-outline-secondary buttonLeft noPaddingBottom"
                onClick={() =>
                  setInd(image_ind - 1 < 0 ? images_len - 1 : image_ind - 1)
                }
              >
                <ArrowLeftIcon size={72} className="centerArrow" />
              </button>
              <div className="divider" />
              <button
                active="true"
                className="btn btn-outline-secondary buttonRight noPaddingBottom"
                onClick={() =>
                  setInd(image_ind + 1 >= images_len ? 0 : image_ind + 1)
                }
              >
                <ArrowRightIcon size={72} className="centerArrow" />
              </button>
            </>
          )}
        </div>
      </div>

      {/** Only include gallery status (what media we're on, the dot/circles accompanying a carousel) if there is more than 1 image. **/}
      {images_len >= 2 && (
        <>
          <div>
            <ul className="horizontalCenter horizontalList" id="shiftLeft">
              {dotComponentList}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

// A simple dot that represents a image/gif
function Dot(props) {
  var isActive = props.isActive === "true";

  if (isActive) {
    return <span className="dot active "></span>;
  } else {
    return <span className="dot"></span>;
  }
}

export default GalleryComponent;