import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Pinapple() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { itemImageSrc: "/assets/IMG_9634.JPG", alt: "Cake 1" },
      { itemImageSrc: "/assets/IMG_9618.JPG", alt: "Cake 2" },
      { itemImageSrc: "/assets/IMG_9624.JPG", alt: "Cake 3" },
      { itemImageSrc: "/assets/IMG_9641.JPG", alt: "Cake 4" },
    ]);
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        className="md:rounded-lg"
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
    );
  };

  return (
    <div className="w-full flex flex-col md:flex-row mt-10">
      {/* PrimeReact Galleria */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <Galleria
          value={images}
          numVisible={1}
          circular
          style={{ maxWidth: "400px" }}
          showThumbnails={false}
          showItemNavigators
          item={itemTemplate}
        />
      </div>

      {/* Text section */}
      <div className="w-full md:w-1/2 flex flex-col px-5 md:px-20">
        <h1
          className="md:mb-10 mb-5 text-left font-bold md:font-normal"
          style={{ fontSize: "clamp(20px, 3vw, 35px)" }}
        >
          Pinaple Sponge Cake
        </h1>
        <p className="text-left mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          adipisci, harum assumenda eligendi nam perferendis unde id quam eius,
          sequi necessitatibus obcaecati inventore fugit dignissimos
          consequuntur! Ipsum eos asperiores numquam.
        </p>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          eum distinctio corrupti nostrum deserunt esse fugit error quo?
        </p>
        {/* <p className="mt-5 text-left text-xl">
          Only Today:{" "}
          <strike className="text-gray-600 font-semibold ms-5">$39</strike>
          <span className="font-bold ms-5 text-2xl">$29</span>
        </p> */}
        <button className="py-1 rounded-full md:w-[150px] w-[130px] border-yellow-500 border md:mt-10 mt-5 hover:bg-yellow-500 hover:text-white shadow-lg">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}