import React from 'react'

const Certificate2 = () => {
  return (
     <div className='flex justify-evenly '> 
    <div className="w-[80vh] ">
      
    <div className="bg-no-repeat h-[80vh] w-[80vh] bg-white shadow-md p-8 border rounded-lg align-text-center"
    style={{
        backgroundImage:
          "url(/img/image2.png)",
      }}
    >
    <div className="text-center pt-32">
      <p className=" text-blue-800 text-center text-5xl ">CERTIFICAT </p><h3 className=' text-blue-800 text-center text-3xl'>OF CPMPLETION </h3>
        <div className="text-center mt-6 font-bold">
       <h5 className='text-blue-400 font-bold'> presented to</h5>
        <h1 className="bg-golden text-blue-800 p-4 text-4xl font-bold" 
        >Name Surname</h1>
        <p className="text-lg text-blue-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing  maxime tempora itaque expedita voluptates voluptatem. Deserunt soluta ducimus nostrum, pariatur cupiditate nesciunt facere iure molestiae?</p>
      </div>
    
      <div className="flex justify-between mt-4">
        <div className="tect-black">
        <p className="text-md text-blue-600">_____________</p>
          <p className="text-md text-center text-blue-600"> Date:</p>
        </div>
        <div className="">
        <p className="text-md text-blue-600">_____________</p>
          <p className="text-md text-center text-blue-600">Signature:</p>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Certificate2