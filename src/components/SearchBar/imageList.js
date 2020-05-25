import "../../components/SearchBar/imageList.css";
import React from "react";
import ImageCard from "../../components/SearchBar/imageCard";

const ImageList = (props) => {
  /*  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={props.image} />;
  });
 */
  return <div className="image-list">{props.images}</div>;
};

export default ImageList;
