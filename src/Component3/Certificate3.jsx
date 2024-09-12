import React from 'react';

const Certificate3 = () => {
  return (
    <div className="ml-80 ">
      {/* Container for the certificate */}
      <div className="w-[90vh]">
        <div
          className="bg-no-repeat h-[80vh] w-[110vh] text-right bg-white shadow-md p-8 border rounded-lg relative"
          style={{
            backgroundImage: "url(/img/image3.png)",
          }}
        >
          {/* Adding image3i.png to the center-left side */}
          <div
            className="absolute left-0 top-[60%] transform -translate-y-1/2 w-[20vh] h-[20vh] bg-no-repeat bg-left bg-contain"
            style={{
              backgroundImage: "url(/img/image3i.png)",
            }}
          ></div>

          <p className="text-green-700 mt-24 text-6xl">CERTIFICAT</p>
          <h3 className="text-green-700 text-3xl">OF ACHIEVEMENT</h3>

          <div className="mt-6 font-bold">
            <h5 className="text-green-700 font-bold mr-24">
              This certificate is presented to
            </h5>
            <h1 className="text-black text-6xl">Stephanie Anderson</h1>
            <p className="text-lg mr-6 text-right ml-52 text-green-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing maxime
              tempora itaque expedita voluptates voluptatem. Deserunt soluta
              ducimus nostrum, pariatur cupiditate nesciunt facere iure
              molestiae?
            </p>
          </div>

          <div className="flex justify-evenly text-right mt-10">
            <div className="text-right">
              <p className="mt-5 text-black">Brenda Singh</p>
              <p className="text-black">_____________</p>
              <p className="text-black">President</p>
            </div>
            <div className="text-right">
              <p className="mt-5 text-black">Nick Cooper</p>
              <p className="text-black">____________________</p>
              <p className="text-black">Organizing Committee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate3;
