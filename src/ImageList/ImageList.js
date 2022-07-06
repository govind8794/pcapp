import React from "react";
import './ImageList.css';
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageList = ({ images }) => {
  return (
    <div className=" image-list ui" >
 
      {images.map((image) => (
       <ImageCard  image = {image}/>
      ))}

    </div>
  );
};
