import React from 'react';

const Certificate10 = () => {
  return (
    <div className='flex justify-center items-center h-screen'> 
      <div className="w-[110vh] relative">
        <div 
          className="bg-no-repeat h-[70vh] w-[110vh] bg-white shadow-md p-8 border-b-indigo-400 border  rounded-lg flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: "url(/img/image10A.png)"
          }}
        >
          {/* Main content of the certificate */}
          <div className="relative w-full h-full flex flex-col items-center">
            <p className="text-black text-4xl font-bold">CERTIFICATE</p>
            <h3 className="text-black text-1xl mb-5">OF APPRECIATION</h3>
            <div className="text-center  w-full flex flex-col justify-center items-center">
              <p className='text-black '>THIS CERTIFICATE IS PROUDLY PRESENTED TO </p>
              <h1 className="bg-golden text-yellow-600 p-4 text-4xl font-bold">Emma Lewis</h1>
              <p className="text-lg text-gray-500 max-w-[60%]">
                For outstanding performance and dedication to the team, demonstrating excellence and commitment to achieving great results in the project.
              </p>
            </div>

            {/* Date and Signature */}
            <div className="flex justify-around w-full mt-10 px-20">
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black"> Date</p>
              </div>
              <div className=' bg-no-repeat h-40 w-40 text-center'style={{backgroundImage:"url(img/image10C.png)"}}></div>
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black">Signature:</p>
              </div>
            </div>
          </div>

          {/* Image on the right side */}
          <div 
            className="absolute right-0 top-0 h-[100%] w-[20%] p-4 border-b-indigo-400 bg-no-repeat bg-right bg-cover"
            style={{
              backgroundImage: "url(/img/image10B.png)"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Certificate10;
