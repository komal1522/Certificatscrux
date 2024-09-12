import React from "react";

const Certificate = () => {
  return (
    <div className="flex justify-evenly space-x-5">
      <div
        className="bg-no-repeat w-[100vh] bg-white shadow-md p-8 border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image.png)",
        }}
      >
        {/* Logo positioned on the right side inside the card */}
        <div className="flex justify-between">
          <div className="flex-grow">
            <p className="text-3xl text-white">
              CERTIFICATE OF
              <h1 className="text-5xl text-white">COMPLETION</h1>
            </p>
          </div>
          <img
            src="/img/imagei.png" // Update with the correct logo image path
            alt="Logo"
            className="h-52 w-32 mt-10"
          />
        </div>

        <div
          className="flex flex-col space-y-5 bg-no-repeat"
        >
          <div className="text-center mb-4">
            This is to certify that
            <h1 className="text-3xl font-bold text-black">Name Surname</h1>
            <p className="text-lg text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              minima quis quia, a explicabo ipsa dolorem commodi dignissimos
              asperiores officiis ut doloribus voluptas ullam soluta veritatis
              quam. Quod, velit quasi.
            </p>
          </div>

          <div className="flex justify-evenly mt-1">
            <div className="text-black">
              <p className="text-md text-black">_____________</p>
              <p className="text-md text-center text-black">Date:</p>
            </div>
            <div>
              <p className="text-md text-black">_____________</p>
              <p className="text-md text-center text-black">Signature:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
