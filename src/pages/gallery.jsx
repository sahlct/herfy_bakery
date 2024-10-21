import React from 'react';


const catalogItems = [
    {
        name: "Caramel cakes with cream vanilla",
        price: "$180.00",
        imageUrl: "/assets/boy6.jpeg"
    },
    {
        name: "Coffee cakes with coffe buttercream",
        price: "$150.00",
        imageUrl: "/assets/boy7.jpeg"
    },
    {
        name: "Vanilla sponge cake with strawberry filling and vanilla buttercream",
        price: "$142.00",
        imageUrl: "/assets/boy2.jpg"
    },
    {
        name: "Choco cakes with vanilla buttercream",
        price: "$128.00",
        imageUrl: "/assets/boy3.jpg"
    },
    {
        name: "Choco cake with strawberry buttercream",
        price: "$132.00",
        imageUrl: "/assets/boy5.jpeg"
    },
];

export default function Gallery() {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold font-josefin py-10" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-20 mb-10 px-5 md:px-10">
                {catalogItems.map((item, index) => (
                    <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md ${index === 2 ? 'md:row-span-1 lg:row-span-2' : ''}`}>
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className={`w-full ${index === 2 ? 'h-64 lg:h-[25.5rem] object-cover ' : 'h-48 object-cover'}`}
                        />
                        {/* Removed the <div> containing name and price */}
                    </div>
                ))}
            </div>
         
        </div>
    );
}
