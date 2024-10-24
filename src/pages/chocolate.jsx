import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export default function Chocolate() {
  const [images] = useState([
    { itemImageSrc: "/assets/IMG_9613.JPG", alt: "Cake 1" },
    { itemImageSrc: "/assets/IMG_9629.JPG", alt: "Cake 2" },
    { itemImageSrc: "/assets/IMG_9637.JPG", alt: "Cake 3" },
    { itemImageSrc: "/assets/IMG_9631.JPG", alt: "Cake 4" },
  ]);

  return (
    <div className="w-full flex flex-col md:flex-row md:mt-10">
      {/* Carousel Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <Carousel className="w-full max-w-xs" onTouchStart={e => e.stopPropagation()}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <img
                        className="md:rounded-lg md:w-[400px] w-[300px] md:h-[400px] h-[300px] object-cover will-change-transform"
                        src={image.itemImageSrc}
                        alt={image.alt}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col px-5 md:px-20">
        <h1
          className="md:mb-10 mb-5 text-left font-bold md:font-normal"
          style={{ fontSize: "clamp(20px, 3vw, 35px)" }}
        >
          Chocolate Sponge Cake
        </h1>
        <p className="text-left mb-2">
          Indulge in our rich chocolate sponge cake, a perfect blend of moistness and decadence. Crafted with premium cocoa and the finest ingredients, each slice offers a heavenly experience. Our cake is light, airy, and infused with deep chocolate flavor, making it a delightful treat for all occasions.
        </p>
        <p className="text-left">
          Perfect for celebrations or a sweet escape, our chocolate sponge cake is sure to impress. Experience the joy of chocolate bliss with every bite!


        </p>
        <a href="https://wa.me/919745956330">
          <button className="py-1 rounded-full md:w-[150px] w-[130px] border-yellow-500 border md:mt-10 mt-5 hover:bg-yellow-500 hover:text-white shadow-lg">
            ORDER NOW
          </button>
        </a>
      </div>
    </div>
  );
}
