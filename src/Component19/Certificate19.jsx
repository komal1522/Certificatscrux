import React from 'react';

const Certificate19 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white w-[60%] shadow-md p-6 border border-gray-300 rounded-lg flex flex-col items-center">
        
        {/* Image positioned at the top-right corner */}
        <div className="absolute top-0 right-0 h-[40%] w-[50%] bg-no-repeat bg-contain" style={{
          backgroundImage: "url(/img/image19A.png)",
        }}></div>

        {/* Title Section */}
        <div className="mt-5 text-center">
          <p className="text-yellow-500 text-7xl font-thin">Certificate</p>
          <p className="text-xl text-gray-400">OF APPRECIATION</p>
        </div>

        {/* Recipient and Content Section */}
        <div className="flex flex-col items-center mt-5">
          <p className="text-orange-200 text-xl">This Certificate is Presented To</p>
          <h1 className="text-6xl text-green-950 font-normal mt-3">Name <br /> Surname</h1>
          <p className="text-black text-center font-normal mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda</p>
          <p className="text-yellow-600 text-center font-thin  mb-28">
            Tempore inventore id tenetur alias quas esse eius distinctio repudiandae<br />
            atque beatae sit, porro molestiae voluptas cumque sint excepturi laudantium!
          </p>
        </div>

        {/* Image at the left bottom corner */}
        <div className="absolute bottom-0 left-0 w-full  h-32 bg-no-repeat bg-bottom" style={{
          backgroundImage: "url(/img/image19B.png)",
        }}>
          {/* Smaller image on top */}
          <div className="absolute bottom-6 left-0 w-[40%] h-32 bg-no-repeat bg-bottom" style={{
            backgroundImage: "url(/img/image19C.png)",
          }}></div>
        </div>

        {/* Date and Signature Section */}
        <div className="absolute right-0 bottom-0 w-44 flex flex-col items-center space-y-5 mb-10">
          <div className="h-20 w-20 bg-no-repeat bg-contain" style={{
            backgroundImage: "url(/img/image19D.png)",
          }}></div>

          <div className="text-yellow-600 text-center">
            <p className="text-md">_____________</p>
            <p className="text-md mb-9">DATE</p>
          </div>

          <div className="text-yellow-600 text-center">
            <p className="text-md">_____________</p>
            <p className="text-md mb-28">SIGNATURE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate19;
