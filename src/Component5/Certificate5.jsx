import React from 'react';

const Certificate5 = () => {
  return (
    <div className='flex justify-center items-center h-screen'> 
      <div className="w-[80vh] relative">
        <div 
          className="bg-no-repeat h-[75vh] w-[80vh] bg-white shadow-md p-8 border-b-indigo-400 border  rounded-lg flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: "url(/img/image5B.png)"
          }}
        >
          {/* Main content of the certificate */}
          <div className="relative w-full h-full flex flex-col items-center">
            <p className="text-black text-5xl">CERTIFICATE</p>
            <h3 className="text-gray-500 text-3xl mb-5">OF APPRECIATION</h3>
            <div className="text-center font-bold w-full flex flex-col justify-center items-center">
              <p className='bg-cyan-700 text-2xl text-white'> ...We Hereby Acknowledge... </p>
              <h1 className="bg-golden text-black p-4 text-4xl font-bold">Name Surname</h1>
              <p className="text-lg text-gray-500 max-w-[70%]">
                For outstanding performance and dedication to the team, demonstrating excellence and commitment to achieving great results in the project.
              </p>
            </div>

            {/* Date and Signature */}
            <div className="flex justify-between w-full mt-10 px-20">
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black"> Date</p>
              </div>
              <div className='h-20 w-20'style={{backgroundImage:"url(img/image5D.png)"}}></div>
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black">Signature:</p>
              </div>
            </div>
          </div>

          {/* Image on the right side */}
          <div 
            className="absolute right-0 top-0 h-[100%] w-[16%]  border-b-indigo-400 bg-no-repeat bg-right bg-cover"
            style={{
              backgroundImage: "url(/img/image5C.png)"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Certificate5;
