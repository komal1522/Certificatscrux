import React from 'react';

const Certificate6 = () => {
  return (
    <div className='flex justify-evenly space-x-5'>
      <div className="w-[115vh]" >
        <div
          className="bg-no-repeat h-[80vh]  mr-9 ml-9 mb-8 bg-white shadow-md p-10 border rounded-lg align-text-center relative"
          style={{
            backgroundImage: "url(/img/image6A.png)", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "top left",  // Ensures the main image is placed correctly at the top
            //backgroundSize: "contain"
          }}
        >
          {/* Main certificate content */}
          <div className=" p-10 bg-no-repeat" style={{backgroundImage:"url(img/image6D.png)", backgroundSize: "contain", backgroundPosition: "center" }}>
           <h3 className='text-center text-2xl text-slate-500'>YOUR COMPANY NAME</h3>
            <h4 className="text-blue-600 text-3xl text-center">
              CERTIFICATE OF APPRECIATION
            </h4>
            <div className="text-center mt-4 font-bold">
              <h3>THIS CERTIFICATE IS PROUDLY PRESENTED TO </h3>
              <h1 className=" font-cedarville text-center italic text-green-900 font-medium p-4 text-4xl " >
                Abdur Ragman<hr className='bg-blue-400 h-1 mt-2 '></hr>
              </h1>
              <p className="text-lg text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium nihil, laborum illo nemo minus enim nam quos exercitationem, porro perspiciatis odio doloremque temporibus. Dolorem tempora nostrum distinctio perferendis rem?
              </p>
              <p>Presented this day on 21-02-2020</p>
            </div>

            {/* Signatures section */}
            <div className="flex justify-between mt-4">
              <div className="space space-x-1">
                <p className="text-md text-black">___________________</p>
                <p className="text-md text-center">DATE</p>
              </div>
              <div className='h-20 w-20'style={{backgroundImage:"url(/img/image6C.png)"}}></div>
              <div className="space space-x-1">
                <p className="text-md text-black">__________________</p>
                <p className="text-md text-center text-black font-bold">SIGNATURE</p>
                
              </div>
            </div>

            {/* Bottom image section */}
            <div
              className="absolute bottom-0 left-0 w-full h-[20vh] bg-no-repeat"
              style={{
                backgroundImage: "url(/img/image6B.png)",
                backgroundSize: "contain",  // Ensures the image fits within the div
                backgroundPosition: "bottom right",  // Aligns the image to the bottom
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate6;
