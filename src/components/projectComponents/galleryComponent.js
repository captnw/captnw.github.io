import React, { useState } from "react";

// Image gallery, pass in an array of images and this would allow you to alternate between them
// with a previous and next button.

function GalleryComponent(props) {
  const images = props.images;
  const [image_ind, setCount] = useState(0);

  return (
    <>
      <div className="horizontalCenter">
        <img
          src={images[image_ind]}
          alt={"Image " + image_ind.toString()}
          className="responsive"
        ></img>
        <br />
        <h6>
          <b>
            Image #{image_ind + 1} out of {images.length} images
          </b>
        </h6>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() =>
            setCount(image_ind - 1 < 0 ? images.length - 1 : image_ind - 1)
          }
        >
          Prev image
        </button>
        <div className="divider" />
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() =>
            setCount(image_ind + 1 >= images.length ? 0 : image_ind + 1)
          }
        >
          Next image
        </button>
      </div>
    </>
  );
}

export default GalleryComponent;
