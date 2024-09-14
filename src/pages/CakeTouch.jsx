import React from 'react';

export default function CakeTouch() {
    return (
        <div className='bg-[#f9f4ea] w-full h-auto py-10'>
            <div className='w-full h-full flex flex-col-reverse md:flex-row' style={{ backdropFilter: 'blur(2px)' }}>
                {/* Form Section */}
                <form action="" className="w-full md:w-1/2 h-full px-10 py-10 flex flex-col">
                    <h1 className='font-lato text-2xl font-bold mb-5 mt-5 md:mt-0'>Get in Touch</h1>
                    <p className='text-base font-light text-start mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus unde alias distinctio explicabo vitae dolores expedita dicta, illo doloribus reiciendis vel asperiores commodi dolore sunt, sit porro eum eius in?</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="mb-3 p-2 border border-gray-300 rounded bg-gray-100"
                    />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="mb-3 p-2 border border-gray-300 rounded bg-gray-100"
                    />
                    <textarea
                        placeholder="Message"
                        className="mb-3 p-2 border border-gray-300 rounded bg-gray-100"
                    ></textarea>
                    <button className="py-1 self-center rounded-full w-[150px] border-yellow-500 border mt-5 hover:bg-yellow-500 hover:text-white shadow-lg bg-gray-200">
                        ORDER NOW
                    </button>
                </form>

                {/* Gallery Section */}
                <div className="gallery w-full md:w-1/2 flex justify-center items-center px-10 py-10 !m-0">
                    <img src="/assets/IMG_9617.JPG" alt="Cake 1" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9620.JPG" alt="Cake 2" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9618.JPG" alt="Cake 3" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9629.JPG" alt="Cake 4" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9639.JPG" alt="Cake 5" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9641.JPG" alt="Cake 6" className='w-[90px] md:w-[170px]' />
                    <img src="/assets/IMG_9641.JPG" alt="Cake 7" className='w-[90px] md:w-[170px]' />
                </div>
            </div>
            <style jsx>{`
                .gallery {
                    --s: 150px;
                    --g: 10px;
                    display: grid;
                    margin: calc(var(--s) + var(--g));
                }
                .gallery > img {
                    grid-area: 1/1;
                    // width: 170px;
                    aspect-ratio: 1.15;
                    object-fit: cover;
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);
                    transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1));
                    cursor: pointer;
                    transition: .2s linear;
                }
                .gallery > img:hover {
                    z-index: 1;
                    --_t: 1.2;
                }
                .gallery > img:first-child {
                    --_y: calc(-100% - var(--g));
                }
                .gallery > img:nth-child(7) {
                    --_y: calc(100% + var(--g));
                }
                .gallery > img:nth-child(3), .gallery > img:nth-child(5) {
                    --_x: calc(-75% - .87*var(--g));
                }
                .gallery > img:nth-child(4), .gallery > img:nth-child(6) {
                    --_x: calc(75% + .87*var(--g));
                }
                .gallery > img:nth-child(3), .gallery > img:nth-child(4) {
                    --_y: calc(-50% - .5*var(--g));
                }
                .gallery > img:nth-child(5), .gallery > img:nth-child(6) {
                    --_y: calc(50% + .5*var(--g));
                }
            `}</style>
        </div>
    )
}
