import React from 'react';

const Certificate12 = () => {
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div
        className="relative  bg-no-repeat w-[35%] shadow-md p-6 border border-gray-300 rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url(/img/image12A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-10 flex flex-col items-center ">
          <div
            className="flex-grow bg-no-repeat text-center"
            style={{
              backgroundImage: "url(/img/image12D.png)",
              backgroundPosition: "top center",
            }}
          >
            <h1 className="text-2xl text-center text-gray-400 mt-10">COMPANY</h1><hr className='bg-gray-400 w-full  h-1'></hr>
            {/* <p
              className="bg-no-repeat h-40 w-full"
              style={{ backgroundImage: "url(/img/image12C.png)" }}
            ></p> */}
          </div>
        </div>
        <p className='text-blue-400 text-5xl font-thin'>CERTIFICATE <h1 className='text-2xl text-center text-black'>OF APPERECIATION</h1></p><hr className='h-1 w-full bg-slate-400'></hr>
        <div className="flex flex-col items-center space-y-5 bg-no-repeat">
          <div className="text-center text-1xl font-thin text-gray-400 mt-7">
            This Certificate is Presented To:
          <h1 className='text-center text-5xl text-black font-bold'>Mr. Name Surname</h1>
            <p className="text-lg font-medium text-black mt-2">
              In Recognition For a Record of Outstanding .
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore inventore id tenetur alias quas esse eius distinctio repudiandae atque beatae nam sit, porro molestiae voluptas cumque sint excepturi laudantium!</p>
          </div>

          {/* Date, Image and Signature */}
          <div className="flex justify-arround  items-start  w-full mt-5">
            <div className="text-black">
              <p className="text-md text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Date:</p>
            </div>

            {/* Image in between Date and Signature */}
            <div
              className="h-20 w-40 bg-no-repeat mx-5"
              style={{ backgroundImage: "url(/img/image12E.png)" }}
            ></div>

            <div>
              <p className="text-md text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Signature:</p>
            </div>
          </div>
        </div>

        {/* Image positioned at the right bottom of the card frame */}
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-no-repeat bg-bottom "
          style={{
            backgroundImage: "url(/img/image12B.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate12;
