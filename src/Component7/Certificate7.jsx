import React from 'react';

const Certificate7 = () => {
  return (
    <div className='flex justify-evenly space-x-5'>
      <div className="w-[115vh]" >
        <div
          className="bg-no-repeat h-[80vh]  mr-9 ml-9  bg-white shadow-md p-8 border rounded-lg align-text-center relative"
          style={{
            backgroundImage: "url(/img/image7A.png)", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "top left",  // Ensures the main image is placed correctly at the top
            //backgroundSize: "contain"
          }}
        >
          {/* Main certificate content */}
          <div className=" p-10 bg-no-repeat">
           <h3 className='text-center  text-white'>YOUR COMPANY NAME</h3>
            <h4 className="text-yellow-600 text-2xl text-center">
              CERTIFICATE <p className='text-gray-500'>OF APPRECIATION</p>
            </h4>
            <div className="text-center mt-10 font-bold">
              <h3> PRESENTED TO </h3>
              <h1 className=" font-cedarville text-center italic text-black font-medium p-4 text-4xl " >
                Name Surname<hr className='bg-slate-700 h-1 mt-2 '></hr>
              </h1>
             <p>Presented this day on 21-02-2020</p>

              <p className="text-lg text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium nihil, laborum illo nemo minus enim nam quos exercitationem, porro perspiciatis odio doloremque temporibus. Dolorem tempora nostrum distinctio perferendis rem?
              </p>
            </div>

            {/* Signatures section */}
            <div className="flex justify-between mt-10">
              <div className="space space-x-1">
                <p className="text-md text-black">___________________</p>
                <p className="text-md text-center">DATE</p>
              </div>
              <div className='bg-no-repeat  h-24 w-40'style={{backgroundImage:"url(/img/image7B.png)",}}></div>
              <div className="space space-x-1">
                <p className="text-md text-black">__________________</p>
                <p className="text-md text-center text-black font-bold">SIGNATURE</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate7;
