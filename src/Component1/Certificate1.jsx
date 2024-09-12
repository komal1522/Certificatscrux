import React from 'react';

const Certificate1 = () => {
  return (
    <div className='flex justify-evenly space-x-5'>
      <div className="w-[110vh]" style={{ backgroundColor: "gray" }}>
        <div
          className="bg-no-repeat h-[70vh] mt-8 mr-9 ml-9 mb-8 bg-white shadow-md p-8 border border-gray-800 rounded-lg align-text-center relative"
          style={{
            backgroundImage: "url(/img/imagei1.png)", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "top center",  // Ensures the main image is placed correctly at the top
            backgroundSize: "contain"
          }}
        >
          {/* Main certificate content */}
          <div className=" pt-32" 
               style={{ backgroundImage: "url(/img/image1ii.png)", 
                        backgroundRepeat: "no-repeat", 
                        backgroundPosition: "top",
                      }}>
            <h4 className="text-amber-300 text-center font-bold">
              CERTIFICATE OF APPRECIATION
            </h4>
            <div className="text-center mt-4 font-bold">
              <h3>Silton High School Awards</h3>
              <h1 className="bg-golden text-white p-4 text-4xl font-bold" style={{ color: '#FFD700' }}>
                EMILY BRYANT
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                for imparting valuable insights during the 32nd Commencement Ceremony
              </p>
            </div>

            {/* Signatures section */}
            <div className="flex justify-between mt-4">
              <div className="space space-x-1">
                <p className="text-md text-amber-300">___________________</p>
                <p className="text-md text-center text-amber-300 font-bold">ADORA MONTMINY</p>
                <p className="text-md text-center">School Principal</p>
              </div>
              
              <div className="space space-x-1">
                <p className="text-md text-amber-300">__________________</p>
                <p className="text-md text-center text-amber-300 font-bold">NICK FLETCHER</p>
                <p className="text-md text-center">School Coordinator</p>
              </div>
            </div>

            {/* Bottom image section */}
            <div
              className="absolute bottom-0 left-0 w-full h-[20vh] bg-no-repeat"
              style={{
                backgroundImage: "url(/img/image1i.png)",
                backgroundSize: "contain",  // Ensures the image fits within the div
                backgroundPosition: "bottom",  // Aligns the image to the bottom
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate1;
