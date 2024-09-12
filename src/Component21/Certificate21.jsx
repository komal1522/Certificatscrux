import React from 'react';

const Certificate21 = () => {
  return (
    <div className="flex justify-center align-center ml-80 space-x-5 h-[80vh] w-[120vh]">
      <div
        className="bg-no-repeat w-[110vh] bg-white shadow-md ml-44  border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image21A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-10">
          <div className="flex-grow text-center">
            <p className="text-5xl font-medium text-black">
              Certificate
              <h6 className=" text-2xl text-gray-600"> Of Appereciation</h6>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 bg-no-repeat">
          <div className="text-center text-black">
            This certificate Presented To:
            <h1 className="text-6xl  text-blue-900">Adam <br/>Johnson</h1>
            <hr className='h-1 w-80 ml-48  bg-blue-400'/>
            <p className="text-lg text-gray-700 p-10 ">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nemo placeat facere illo quo expedita ea laborum ratione sequi dolores quaerat laudantium ab incidunt, et atque tempora earum delectus!
            </p>
          </div>

          <div className="flex justify-evenly mt-2">
        <div className="tect-black">
        <p className="text-md text-blue-900">_____________</p>
          <p className="text-md text-center text-blue-900"> Date:</p>
        </div>
        <div className="content-center h-20 w-20" style={{backgroundImage:"url(img/image21D.png)", backgroundPosition: "center",backgroundSize: "cover", }}></div>
        <div className="">
        <p className="text-md text-blue-900">_____________</p>
          <p className="text-md text-center text-blue-900">Signature:</p>
        </div>
      </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
        <div
          className="absolute bottom-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url(/img/image21B.png)",
          }}
        ></div>
        <div className='absolute bottom-0 w-full h-full bg-no-repeat bg-bottom bg-contain'style={{backgroundImage:"url(/img/image21C.png)"}}></div>
      </div>
    </div>
  );
};

export default Certificate21;
