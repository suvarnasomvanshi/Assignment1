import React from "react";
import ImageCard from "./ImageCard";

const CardGridImageSection = () => {
  return (
    <div>
      <h4 className="text-center">Heading</h4>
      <h6 className="text-center text-secondary py-1">Subheading</h6>
      <div className="d-flex flex-wrap justify-content-center px-auto pt-3">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default CardGridImageSection;
