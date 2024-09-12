import React from 'react';

const Certificate14 = () => {
  return (
    <div className="flex justify-center items-center h-[60%]">
      <div
        className="relative bg-no-repeat w-[60%]  shadow-md p-6 border border-gray-300 rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url(/img/image14A.png)",
        }}
      >
       
        <div className="mt-4 items-left" >
          <div className='h-20 w-20  items-center bg-no-repeat'style={{
          backgroundImage: "url(/img/image13A.png)",
        }}> <br></br><div className=" mt-4 text-2xl text-center text-gray-400 "> COMPANY</div></div>
       
        <br></br>
        
        
        
        <div className='flex justify-between'>
        <div className="text-blue-400 text-7xl  font-thin text-left">
          CERTIFICATE
          <h1 className="text-2xl text-blue-400">OF APPRECIATION</h1>
        </div>
        <div className='items-center mt-7 h-32 w-32 bg-no-repeat'style={{backgroundImage:"url(/img/image14B.png)"}}></div>
        </div>
        </div>
        <div className="flex flex-col items-start space-y-5 bg-no-repeat">
          <div className="text-left text-1xl font-bold text-black ">
            This Certificate is Presented To
            <h1 className="text-left text-5xl text-black font-medium">Mr. Name Surname</h1> 
            <p className="text-left font-thin text-gray-600">
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

export default Certificate14;
