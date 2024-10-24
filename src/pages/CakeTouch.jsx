import React from 'react';

export default function CakeTouch() {
    return (
        <div className='bg-[#f9f4ea] w-full h-auto py-10'>
            {/* Internal CSS */}
            <style>
                {`
                    .half-border-box {
                        border-radius: 64% 36% 37% 63% / 35% 65% 35% 65%;
                        background-color: transparent;
                    }

                    /* Top-left and bottom-right border using pseudo-elements */
                    .half-border-box::before,
                    .half-border-box::after {
                        content: '';
                        position: absolute;
                        border-style: solid;
                        border-radius: inherit; /* Matches the border-radius */
                    }

                    /* Top-left half border */
                    .half-border-box::before {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-left-width: 8px;
                        border-top-width: 4px;
                        border-left-color: gary;
                        border-top-color: gary;
                    }

                    
                `}
            </style>

            <div className='w-full h-full flex flex-col-reverse md:flex-row' style={{ backdropFilter: 'blur(2px)' }}>
                {/* Form Section */}
                <div className='w-full md:w-1/2 h-full flex justify-center md:py-10 md:ps-20 px-10 md:px-0'>
                <form action="" className=" flex flex-col">
                    <h1 className='font-lato text-2xl font-bold mb-5 mt-5 md:mt-0'>Get in Touch</h1>
                    <p className='text-base font-light text-start mb-5'>
                    We'd love to hear from you! Reach out to us for inquiries, feedback, or assistance, and we'll respond promptly.
                    </p>
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
                    <a href="https://wa.me/919745956330"><button className="py-1 self-center rounded-full w-[150px] border-yellow-500 border mt-5 hover:bg-yellow-500 hover:text-white shadow-lg bg-gray-200">
                        ORDER NOW
                    </button></a>
                </form>
                </div>

                {/* Gallery Section */}
                <div className="gallery w-full min-h-[250px] md:w-1/2 flex justify-center items-center md:px-10 px-5 py-10 !m-0">
                    {/* Decorative background */}
                    <div className='bg-amber-100 lg:h-[380px] lg:w-[380px] h-[320px] w-[300px] shadow-lg rounded-[50px] flex justify-center items-center flex-col'
                       >
                          {/* Video element */}
                          <video
                            src="/assets/video1.mp4"
                            className='w-full object-contain rounded-3xl max-w-[250px]'
                            style={{ filter: 'drop-shadow(10px 20px 20px rgba(0, 0, 0, 0.5))' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>

                        {/* Caption text */}
                        <p className='font-josefin z-50 mt-5 md:text-lg text-sm'>
                            "Have Herfy Sweet Cake"
                        </p>
                    </div>

                    {/* Video container */}
                    {/* <div className='half-border-box absolute lg:h-[400px] lg:w-[400px] w-[300px] h-[250px] flex flex-col justify-center items-center'> */}
                      
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
}
