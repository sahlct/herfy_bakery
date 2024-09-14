import React from 'react';

export default function GetinTouch() {
  return (
    <div className="w-full flex flex-col md:flex-row pt-20 pb-32 px-5 rounded-lg overflow-hidden">
      {/* Working Time Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-5 mb-10 md:mb-0 h-[330px] bg-gray-300 border-e border-black rounded-s-xl">
        <h1 className="text-2xl mb-10 font-semibold font-josefin">Working Time</h1>
        <div className="w-full px-5">
          <div className="w-full flex justify-between items-center px-10 h-[40px] bg-gray-100">
            <div>Week Days</div>
            <div>9:00am - 8:00pm</div>
          </div>
          <div className="w-full flex justify-between items-center px-10 h-[40px] bg-gray-200">
            <div>Saturday</div>
            <div>10:00am - 6:00pm</div>
          </div>
          <div className="w-full flex justify-between items-center px-10 h-[40px] bg-gray-100">
            <div>Sunday</div>
            <div>Closed</div>
          </div>
        </div>
      </div>

      {/* Get in Touch Form Section */}
      <div className="w-full md:w-1/3 flex flex-col px-5 mb-10 md:mb-0 bg-gray-300 pt-5 border-e border-black">
        <h1 className="text-2xl mb-5 font-semibold font-josefin ">Get in Touch</h1>
        <form action="" className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="mb-3 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="mb-3 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            className="mb-3 p-2 border border-gray-300 rounded"
          ></textarea>
          <button className="py-1 self-center rounded-full w-[150px] border-yellow-500 border mt-5 hover:bg-yellow-500 hover:text-white shadow-lg bg-gray-200">
            ORDER NOW
          </button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center bg-gray-300 px-5 rounded-e-xl">
        <iframe
          title="Kondotty Location Map" // Add a meaningful title here
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31316.260862569245!2d75.94564869612613!3d11.148145697522525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala%20673638!5e0!3m2!1sen!2sin!4v1725890332520!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
