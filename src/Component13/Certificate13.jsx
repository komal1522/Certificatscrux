import React from 'react';

const Certificate13 = () => {
  return (
    <div className="flex justify-center items-start h-[90%]">
      <div
        className="relative bg-no-repeat w-[55%] shadow-md p-6 border border-gray-300 rounded-lg flex flex-col justify-start items-start">
        <div className="flex justify-evenly mt-5" >
          <div className='h-20 w-20 bg-no-repeat'style={{
          backgroundImage: "url(/img/image13A.png)",
        }}></div>
        <div className="text-left text-2xl text-gray-400 "> COMPANY</div>
        </div>
        
        <p className="text-black text-5xl font-thin text-left">
          CERTIFICATE
          <h1 className="text-2xl text-blue-400">OF APPRECIATION</h1>
        </p>
       
        <div className="flex flex-col items-start space-y-5 bg-no-repeat">
          <div className="text-left text-1xl font-bold text-black mt-7">
            This Certificate is Presented To
            <h1 className="text-left text-5xl text-black font-bold">Mr. Name Surname</h1> <hr className="h-1 w-full bg-blue-400"></hr>
            <p className="text-left text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda<br/>
               tempore inventore id tenetur alias quas esse eius distinctio repudiandae<br/>
                atque beatae sit, porro molestiae voluptas cumque sint excepturi laudantium!
            </p>
          </div>

          {/* Date, Image and Signature */}
          <div className="flex justify-around items-start p-3 w-full mt-5 space-x-10">
            <div className="text-black items-center">
              <p className="text-md text-center text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Date:</p>
            </div>

            <div className="text-black items-center">
              <p className="text-md text-center text-gray-600">_____________</p>
              <p className="text-md text-center text-black">Signature:</p>
            </div>
          </div>
        </div>

        {/* Image positioned at the right bottom of the card frame */}
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url(/img/image13B.png)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Certificate13;
