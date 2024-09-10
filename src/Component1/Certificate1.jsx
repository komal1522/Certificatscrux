import React from 'react'

const Certificate1 = () => {
  return (
    <div className='flex justify-evenly space-x-5 '> 
    <div className="w-[80vh]" style={{backgroundColor:"gray"}}>
      
    <div className="bg-no-repeat h-[70vh] mt-7 mr-7 ml-7 mb-7  bg-white shadow-md p-8 border border-gray-800 rounded-lg align-text-center"
    style={{
        backgroundImage:
          "url()",
      }}
    >
    <div className="text-center pt
    -32 ">
      <h4 className=" text-amber-300 text-center font-bold  ">CERTIFICAT OF APPRECIATION </h4>
        <div className="text-center mt-6 font-bold">
       <h3> Silton High School Awards</h3>
        <h1 className="bg-golden text-white p-4 text-4xl font-bold" 
        style={{color:'#FFD700'}}>EMILY BRYANT</h1>
        <p className="text-lg text-gray-500 mt-2">for imparting vauable insights during the 32nd Commencement Ceremony</p>
      </div>
    
      <div className="flex justify-between mt-4 ">
        <div className="space space-x-1">
        <p className="text-md text-amber-300 ">___________________</p>
          <p className="text-md text-center text-amber-300 font-bold">ADORA MONTMINY</p>
          <p className="text-md text-center ">School Principal</p>
    
        </div>
        <div className="space space-x-1">
        <p className="text-md text-amber-300 ">__________________</p>
          <p className="text-md text-center text-amber-300 font-bold">NICK FLETCHER</p>
          <p className="text-md text-center "> School Coordinator</p>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Certificate1