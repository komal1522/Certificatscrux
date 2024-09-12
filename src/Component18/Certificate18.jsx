import React from 'react';

const Certificate18 = () => {
  return (
    <div className='flex bg-no-repeat justify-center p-16 items-center '> 
      <div className=" relative">
        <div 
          className=" bg-no-repeat h-[80%] w-[70%] bg-white justify-center items-center text-center"
          style={{
            backgroundImage: "url(/img/image18B.png)"
          }}
        >
          {/* Main content of the certificate */}
          <div className="relative w-full h-full flex flex-col items-center">
            <p className="text-blue-500 mt-4 text-5xl">Title</p>
            <div className='bg-no-repeat h-20 w-40'style={{backgroundImage:"url(/img/image18A.png)"}}></div>
            {/* <h3 className="text-gray-500 text-3xl mb-5">OF APPRECIATION</h3> */}
            <div className="text-center font-bold w-full flex flex-col justify-center items-center">
              <p className=' text-blue-500'>Subject</p>
              <h1 className="bg-golden text-blue-500 p-4 font-thin text-5xl">Name <br></br>Surname</h1>
              {/* <hr className='w-64 mt-24'></hr> */}
              <p className="text-lg p-20 text-blue-500 font-thin">
                For outstanding performance and dedication to the team, demonstrating excellence and commitment to achieving great results in the project.
              </p>
            </div>

           
          </div>

        </div>
      </div>
    </div>
  );
}

export default Certificate18;
