import React from "react";

const Certificate = () => {
  return (
<div className="flex justify-evenly space-x-5 ">
    <div className="bg-no-repeat  w-[80vh]  bg-white shadow-md p-8 border border-gray-300 rounded-lg align-text-center"
    style={{
        backgroundImage:
          "url(/img/image.png)",
      }}
    >
      <div className="flex flex-col  space-y-40 border border-space-2 border-red-600 p-1">
      <p className="text-3xl text-white">CERTIFICATE OF <h1 className="text-5xl text-white">COMPLETION</h1> </p>
      <div className="fixed top-10 right-5" style={{background:"url()"}}>
      
      </div>
        <div><div className="text-center text mb-6">
        This is to certify that
        <h1 className="text-3xl font-bold text-black">Name Surname</h1>
        <p className="text
        -lg text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio minima quis quia, a explicabo ipsa dolorem commodi dignissimos asperiores
            officiis ut doloribus voluptas ullam soluta veritatis quam. Quod, velit quasi.</p>
      </div>

      <div className="flex justify-evenly mt-8">
        <div className="tect-black">
        <p className="text-md text-black">_____________</p>
          <p className="text-md text-center text-black"> Date:</p>
        </div>
        <div className="">
        <p className="text-md text-black">_____________</p>
          <p className="text-md text-center text-black">Signature:</p>
        </div>
      </div>
      </div>
      </div>
    </div>

</div>
  );
};

export default Certificate;
