import React from 'react';

const Certificate5 = () => {
  return (
    <div className="flex justify-center align-middle ml-80 space-x-5 h-[80vh] w-[110vh]">
      <div
        className="bg-no-repeat w-[100vh] bg-white shadow-md p-8 border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image4.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-20">
          <div className="flex-grow text-center">
            <p className="text-7xl text-black">
              CERTIFICATE 
              <h1 className="text-3xl text-gray-400"> OF APPRECIATION</h1>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 bg-no-repeat">
          <div className="text-center text-3xl text-blue-400">
            This Certificate is Presented To:
            {/* <h1 className="text-3xl font-bold text-black">Name Surname</h1> */}
            <hr className='bg-green-500 h-1 mt-5'></hr>
            <p className="text-lg text-blue-400 mt-2">
              In Recognition For a Record of Outstanding Accomplishments.
            </p>
          </div>

          <div className="flex justify-evenly">
            <div className="text-black">
              <p className="text-md text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Date:</p>
            </div>
            <div>
              <p className="text-md text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Signature:</p>
            </div>
          </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url(/img/image4i.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate5;
