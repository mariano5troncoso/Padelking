import React from 'react';
import { Carousel } from "@material-tailwind/react";

export function CarouselDefault({ images }) {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
