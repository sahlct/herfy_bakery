import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export default function Pinapple() {
  const [images] = useState([
    { itemImageSrc: "/assets/IMG_9634.JPG", alt: "Cake 1" },
    { itemImageSrc: "/assets/IMG_9618.JPG", alt: "Cake 2" },
    { itemImageSrc: "/assets/IMG_9624.JPG", alt: "Cake 3" },
    { itemImageSrc: "/assets/IMG_9641.JPG", alt: "Cake 4" },
  ]);

  return (
    <div className="w-full flex flex-col md:flex-row md:mt-10">
      {/* Carousel Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <Carousel className="w-full max-w-xs" onTouchStart={(e) => e.stopPropagation()}>
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
          Pinapple Sponge Cake
        </h1>
        <p className="text-left mb-2">
          Savor the tropical delight of our pineapple sponge cake, where every bite transports you to paradise. Made with fresh, juicy pineapples and a light, airy sponge, this cake is a perfect blend of sweetness and tang. Each slice is expertly layered with velvety cream, creating a luscious texture that melts in your mouth. Ideal for birthdays, celebrations, or any occasion, it's a refreshing treat that brightens your day.
        </p>
        <p className="text-left">
          Our pineapple sponge cake is not just a dessert; it's an experience of sunshine and joy. Taste the essence of the tropics in every delicious slice!
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
