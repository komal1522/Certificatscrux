import React from 'react';

const Certificate22 = () => {
  return (
    <div className="flex justify-center align-center ml-80 space-x-5 h-[70vh] w-[120vh]">
      <div
        className="bg-no-repeat w-[110vh] bg-white shadow-md  border border-gray-300 rounded-lg align-text-center relative"
        style={{
          backgroundImage: "url(/img/image22A.png)",
        }}
      >
        {/* Main content of the certificate */}
        <div className="p-8">
          <div className="flex-grow text-center">
            <p className="text-5xl font-medium text-black">
              C E R T I F I C A T E
              <h6 className=" text-2xl text-gray-700"> O F  A C H I E V E M N E T</h6>
            </p>            <hr className='h-1 w-80 ml-48  bg-black'/>

          </div>
        </div>

        <div className="flex flex-col space-y-5 bg-no-repeat">
          <div className="text-center text-black">
            THIS CERTIFICATE IS PROUDLY PRESENTED TO
            <h1 className="text-6xl  text-blue-900">Mr. Name<br/>Surname</h1>
            <div className="text-lg flex  text-gray-700 ml-20 mr-24">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nemo placeat facere illo quo expedita ea laborum ratione sequi dolores quaerat laudantium ab incidunt, et atque tempora earum delectus!
  <div className="content-center h-32 w-72" style={{backgroundImage:"url(img/image22B.png)", backgroundPosition: "center",backgroundSize: "cover", }}></div>
  </div>
          </div>

          <div className="flex justify-evenly">
        <div className="tect-black">
        <p className="text-md text-blue-900">_____________</p>
          <p className="text-md text-center text-blue-900"> Date:</p>
        </div>
        <div className="">
        <p className="text-md text-blue-900">_____________</p>
          <p className="text-md text-center text-blue-900">Signature:</p>
        </div>
      </div>
        </div>

        {/* Image positioned at the bottom of the card frame */}
       
      </div>
    </div>
  );
};

export default Certificate22;
