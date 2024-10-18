import React from 'react';
import Footer from './footer';

const catalogItems = [
    {
        name: "Caramel cakes with cream vanilla",
        price: "$180.00",
        imageUrl: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
    },
    {
        name: "Coffee cakes with coffe buttercream",
        price: "$150.00",
        imageUrl: "https://assets.winni.in/product/primary/2023/8/88014.jpeg?dpr=2&w=220"
    },
    {
        name: "Vanilla sponge cake with strawberry filling and vanilla buttercream",
        price: "$142.00",
        imageUrl: "https://stylesweet.com/wp-content/uploads/2022/06/DripBestButterCake_Featured.jpg"
    },
    {
        name: "Choco cakes with vanilla buttercream",
        price: "$128.00",
        imageUrl: "https://whipped.in/cdn/shop/products/zyro-image_34_1000x.jpg?v=1687334977"
    },
    {
        name: "Choco cake with strawberry buttercream",
        price: "$132.00",
        imageUrl: "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/04/07060232/Cake-made-with-Kit-Kats.jpg"
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
                            className={`w-full object-cover ${index === 2 ? 'h-48 lg:h-full' : 'h-48'}`}
                        />
                        {/* Removed the <div> containing name and price */}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
