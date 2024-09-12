import React from 'react';

const Certificate23 = () => {
  return (
    <div className="flex justify-center align-center  ml-80 space-x-5 h-[109vh] w-[82vh]">
      <div
        className="bg-no-repeat w-[90vh] bg-white shadow-md  border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image23B.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="flex-grow  bg-no-repeat mt-12 text-center"
            style={{
              backgroundImage: "url(/img/image23A.png)",
              backgroundPosition: "top center",
            }}
            >
              <br></br>
          <div className="flex-grow text-center">
            <p className="text-5xl mt-32 font-thin font-serif  text-black">
              CERTIFICATE
              <h6 className=" text-2xl text-gray-700"> OF ACHIEVEMNET</h6>
            </p>            <hr className='h-1 w-80 ml-32  bg-black'/>

          </div>
        </div>

        <div className="flex flex-col space-y-5 bg-no-repeat">
          <div className="text-center text-black">
            THIS CERTIFICATE IS PROUDLY PRESENTED TO
            <h1 className="text-6xl  text-blue-900">Mr. Name<br/>Surname</h1>
            <div className="text-lg  text-gray-700 ml-20 mr-24">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nemo placeat facere illo quo expedita ea laborum ratione sequi dolores quaerat laudantium ab incidunt, et atque tempora earum delectus!
  </div>
          </div>

          <div className="text-center">
        <p className="text-md text-blue-900">_____________</p>
          <p className="text-md text-center text-blue-950">SIGNATURE</p>
        </div>
      </div>       
      </div>
    </div>
  );
};

export default Certificate23;
