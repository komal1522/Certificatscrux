import React from 'react';

const Certificate15 = () => {
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div
        className="relative bg-no-repeat w-[50%] shadow-md ml-5 border p-2 border-gray-300 rounded-lg flex flex-col justify-center items-center">
          <div className='h-36 w-full bg-no-repeat'style={{
          backgroundImage: "url(/img/image15A.png)",
        }}></div>
        
        
        <p className="text-blue-400 text-7xl font-thin text-left mr-40 ">
          CERTIFICATE
          <h1 className="text-2xl text-left text-yellow-400">OF APPRECIATION</h1>
        </p>
       
        <div className="flex flex-col items-start space-y-5 bg-no-repeat">
          <div className="text-left text-1xl font-bold text-black mt-7">
            This Certificate is Presented To
            <h1 className="text-left text-6xl text-black itelic font-normal">Mr. Name Surname</h1> <hr className="h-1 mt-4 w-full bg-black"></hr>
            <p className="text-left text-gray-600">
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

        
      </div>
    </div>
  );
};

export default Certificate15;
