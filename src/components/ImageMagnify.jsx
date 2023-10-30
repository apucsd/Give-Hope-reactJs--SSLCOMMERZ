/* eslint-disable react/prop-types */
import ReactImageMagnify from "react-image-magnify";

const ImageMagnify = ({ imageURL }) => {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "image of ",
          isFluidWidth: true,
          src: imageURL,
          width: 900,
          height: 800,
        },
        largeImage: {
          enlargedImagePosition: "",
          width: 800,
          height: 1000,
          src: "",
        },
      }}
    />
  );
};

export default ImageMagnify;
