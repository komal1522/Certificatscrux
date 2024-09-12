import React from 'react';

const Certificate17 = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-no-repeat p-9'>
      <div className="relative w-full max-w-[800px]">
        <div
          className="relative bg-no-repeat bg-center bg-cover justify-center items-center text-center"
          style={{
            backgroundImage: "url(/img/image17A.png)",
            height: '100%', // Ensures the image takes up the whole space
            width: '100%',   // Ensures the image takes up the whole space
          }}
        >
          {/* Main content of the certificate */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-10">
            <p className="text-black text-5xl font-bold">C E R T I F I C A T E</p>
            <div className="text-center font-bold w-full flex flex-col justify-center items-center mt-8">
              <p className='text-black text-xl mb-8'>
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>
              <h1 className="bg-golden text-black p-4 text-4xl font-bold">Name Surname</h1>
              <hr className='w-80 mt-12' />
              <p className="text-lg p-5 text-gray-500 font-thin mt-4">
                For outstanding performance and dedication to the team, demonstrating excellence and commitment to achieving great results in the project.
              </p>
            </div>

            {/* Date and Signature */}
            <div className="flex justify-between w-full mt-10">
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black">DR.LOREM IPSUM</p>
              </div>
              <div className='h-20 bg-no-repeat w-20' style={{ backgroundImage: "url(img/image17B.png)" }}></div>
              <div className="text-black text-center">
                <p className="text-md text-gray-600">_____________</p>
                <p className="text-md text-black">DR.LOREM IPSUM</p>
              </div>
            </div>
          </div>

          {/* Image on the right side */}
          <div
            className="absolute right-0 top-0 h-full w-[16%] border-b-indigo-400 bg-no-repeat bg-right bg-cover"
            // style={{
            //   backgroundImage: "url(/img/image5C.png)"
            // }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Certificate17;
