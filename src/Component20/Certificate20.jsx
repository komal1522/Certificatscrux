import React from 'react';

const Certificate20 = () => {
  return (
    <div className="flex justify-center align-center ml-80 space-x-5 h-[80vh] w-[120vh]">
      <div
        className="bg-no-repeat w-[110vh] bg-white shadow-md ml-44  border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image20A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-10">
          <div className="flex-grow text-center">
            <p className="text-5xl font-medium text-blue-400">
              Certificate
              <h6 className=" text-2xl text-gray-400"> Of Appereciation</h6>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 bg-no-repeat">
          <div className="text-center text-black">
            Proudly Presented To:
            <h1 className="text-6xl  text-blue-500">Yasin <br/>Rahman</h1>
            <p className="text-lg text-gray-700 p-10 ">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nemo placeat facere illo quo expedita ea laborum ratione sequi dolores quaerat laudantium ab incidunt, et atque tempora earum delectus!
            </p>
          </div>

          <div className="flex justify-evenly ">
            <div className="text-black">
            <p className="text-md text-center text-black">Albert Flores</p>
              <p className="text-md text-gray-600">Project Manager</p>
            </div>
            <div>
            <p className="text-md text-center text-black">Brooklyn Simmons</p>
              <p className="text-md text-gray-600">Director</p>
            </div>
          </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
        <div
          className="absolute bottom-0 ml-96 w-96 h-96 bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url(/img/image20B.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate20;
