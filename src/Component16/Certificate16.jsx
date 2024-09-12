import React from 'react';

const Certificate16 = () => {
  return (
    <div className="flex justify-center align-middle ml-80  p-9 space-x-5 h-[80vh] w-[110vh]">
      <div
        className="bg-no-repeat w-[100vh] bg-white shadow-md  border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image16A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-8">
          <div className="flex-grow text-center">
            <p className="text-6xl font-thin mt-20 text-black">
              CERTIFICATE 
              <h5 className=" text-black  text-2xl font-medium  bg-yellow-600"> OF APPRECIATION</h5>
            </p>
          </div>
        </div>
        <div className="">
          <div className="text-center text-black">
            This Certificate is Presented To
            <h1 className=" mt-2 text-6xl font-normal text-black">Name Surname</h1> 
            
          </div>
          <p className='text-gray-400 p-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolorum laudantium voluptatum ad harum accusamus accusantium beatae, voluptate blanditiis fugit reprehenderit at eaque eveniet quod quasi laboriosam nobis inventore ab?</p>
              <div className=''>
              <p className="text-md text-center text-green-950">_ _ _ _ _ _ _ _</p>
              <p className="text-md text-center text-green-950">Signature:</p>
            </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url(/img/image16B.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate16;
