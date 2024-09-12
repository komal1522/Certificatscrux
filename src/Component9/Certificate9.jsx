import React from 'react';

const Certificate9 = () => {
  return (
    <div className="flex justify-center align-middle ml-80 space-x-5 h-[80vh] w-[110vh]">
      <div
        className="bg-no-repeat w-[100vh] bg-white shadow-md p-6 border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image9A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-10">
          <div className="flex-grow text-center">
            <p className="text-4xl text-green-950">
              CERTIFICATE 
              <p className=" text-gray-400"> OF ACHIEVEMENT APPRECIATION</p>
            </p>
          </div>
        </div>
        <div className="">
          <div className="text-center text-3xl text-gray-300">
            This Certificate is Presented To:
            <h1 className=" mt-8 text-5xl text-yellow-600">Emma Lewis</h1> 
            <p className='text-yellow-600'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            <p className="text-lg text-blue-400 mt-2">
              In Recognition For a Record of Outstanding Accomplishments.
            </p>
          </div>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolorum laudantium voluptatum ad harum accusamus accusantium beatae, voluptate blanditiis fugit reprehenderit at eaque eveniet quod quasi laboriosam nobis inventore ab?</p>

          <div className="flex justify-evenly">
            <div className="text-black">
              <p className="text-md text-green-950">_ _ _ _ _ _ _ _</p>
              <p className="text-md text-center text-green-950">Date:</p>
            </div>
            <div>
              <p className="text-md text-green-950">_ _ _ _ _ _ _ _</p>
              <p className="text-md text-center text-green-950">Signature:</p>
            </div>
          </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url(/img/image9B.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate9;
