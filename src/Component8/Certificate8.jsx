import React from 'react';

const Certificate8 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Container for the certificate */}
      <div className="relative w-[100vh]">
        <div
          className="bg-no-repeat h-[70vh] w-[90vh] text-center bg-white shadow-md border rounded-lg relative items-center px-12"
         
        >
          {/* Adding image8B.png to the center-left side */}
          <div
            className="absolute left-0 top-[50%] transform -translate-y-1/2 w-[40%] h-[100%] bg-no-repeat bg-left bg-contain"
            style={{
              backgroundImage: "url(/img/image8B.png)",
            }}
          ></div>

          {/* Certificate content shifted to the right */}
          <div className="w-full flex justify-between items-right">
            
            <div
              className="h-24 w-24 bg-no-repeat "
              style={{
                backgroundImage: "url(/img/image8A.png)",
                backgroundSize: 'contain',
              }}
            ></div>
             
            <h3 className="text-green-700 text-2xl"><p className="text-green-700 text-5xl">CERTIFICATE</p> OF ACHIEVEMENT <hr className='bg-amber-400 h-1'></hr></h3>
           </div>

          <div className="mt-4  text-right">
            <h5 className="text-green-700 font-bold">This certificate is presented to</h5>
            <h1 className="text-black text-5xl mt-2">Name Surname</h1>
            <h2 className='text-right mt-3'>Lorem ipsum dolor</h2>
            <p className="text-right text-green-700 ml-10 mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime itaque expedita voluptates.
            </p>
          </div>

          <div className="flex justify-end w-full mt-6 pr-12 ">
            <div className="text-right justify-center">
              
              <p className=" text-md text-yellow-400">__________________</p>
              <p className="mt-5 text-md text-center text-black">DATE</p>
          
            </div>
            <div className="text-right ml-12 ">
              <p className="text-md text-yellow-400">__________________</p>
              <p className="text-md text-center text-black mt-5 ">SIGNATURE</p>
            </div>
          </div>

          <div
            className="absolute right-0 top-0 h-[100%] w-5 bg-no-repeat bg-right bg-cover"
            style={{
              backgroundImage: "url(/img/image8C.png)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Certificate8;
