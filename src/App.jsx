import React, { useRef } from "react";
import Certificate from "./Component/Certificate";
import Certificate1 from "./Component1/Certificate1";
import Certificate2 from "./Component2/Certificate2";
import Certificate3 from "./Component3/Certificate3";
import Certificate4 from "./Component4/Certificate4";
import Certificate5 from "./Component5/Certificate5";
import Certificate6 from "./Component6/Certificate6";
import Certificate7 from "./Component7/Certificate7";
import Certificate8 from "./Component8/Certificate8";
import Certificate9 from "./Component9/Certificate9";
import Certificate10 from "./Component10/Certificate10";
import Certificate11 from "./Component11/Certificate11";
import Certificate12 from "./Component12/Certificate12";
import Certificate13 from "./Component13/Certificate13";
import Certificate14 from "./Component14/Certificate14";
import Certificate15 from "./Component15/Certificate15";
import Certificate16 from "./Component16/Certificate16";
import Certificate17 from "./Component17/Certificate17";
import Certificate18 from "./Component18/Certificate18";
import Certificate19 from "./Component19/Certificate19";
import Certificate20 from "./Component20/Certificate20";
import Certificate21 from "./Component21/Certificate21";
import Certificate22 from "./Component22/Certificate22";
import Certificate23 from "./Component23/Certificate23";
import { toPng } from "html-to-image";

function App() {
  const certificateRef = useRef(null);
  const certificateRef1 = useRef(null);
  const certificateRef2 = useRef(null);
  const certificateRef3 = useRef(null);
  const certificateRef4 = useRef(null);
  const certificateRef5 = useRef(null);
  const certificateRef6 = useRef(null);
  const certificateRef7 = useRef(null);
  const certificateRef8 = useRef(null);
  const certificateRef9 = useRef(null);
  const certificateRef10 = useRef(null);
  const certificateRef11 = useRef(null);
  const certificateRef12 = useRef(null);
  const certificateRef13 = useRef(null);
  const certificateRef14 = useRef(null);
  const certificateRef15 = useRef(null);
  const certificateRef16 = useRef(null);
  const certificateRef17 = useRef(null);
  const certificateRef18 = useRef(null);
  const certificateRef19 = useRef(null);
  const certificateRef20 = useRef(null);
  const certificateRef21 = useRef(null);
  const certificateRef22 = useRef(null);
  const certificateRef23 = useRef(null);


  
  

  const handleDownloadCertificate = (ref, filename) => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${filename}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      {/* Certificate 1 */}
      <div>
        <div ref={certificateRef}>
          <Certificate />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef, "certificate")}
          >
            Download 
          </button>
        </div>
      </div>

      {/* Certificate 2 */}
      <div>
        <div ref={certificateRef1}>
          <Certificate1 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef1, "certificate1")}
          >
            Download 
          </button>
        </div>
      </div>

      {/* Certificate 3 */}
      <div>
        <div ref={certificateRef2}>
          <Certificate2 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2  mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef2, "certificate2")}
          >
            Download 
          </button>
        </div>
      </div>


      <div>
        <div ref={certificateRef3}>
          <Certificate3 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef3, "certificate3")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef4}>
          <Certificate4 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef4, "certificate4")}
          >
            Download 
          </button>
        </div>
      </div>

    
      {/* Certificate 6 */}
      <div>
        <div ref={certificateRef5}>
          <Certificate5 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef5, "certificate5")}
          >
            Download 
          </button>
        </div>
      </div>




      {/* Certificate 7*/}
      <div>
        <div ref={certificateRef6}>
          <Certificate6/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef6, "certificate6")}
          >
            Download 
          </button>
        </div>
      </div>


      {/* Certificate 8 */}
      <div>
        <div ref={certificateRef7}>
          <Certificate7/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef7, "certificate7")}
          >
            Download 
          </button>
        </div>
      </div>


{/* Certificate 9 */}
<div>
        <div ref={certificateRef8}>
          <Certificate8 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef8, "certificate8")}
          >
            Download 
          </button>
        </div>
      </div>


{/* Certificate 10 */}
<div>
        <div ref={certificateRef9}>
          <Certificate9/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef9, "certificate9")}
          >
            Download 
          </button>
        </div>
      </div>

{/* Certificate 11*/}
<div>
        <div ref={certificateRef10}>
          <Certificate10/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef10, "certificate10")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef11}>
          <Certificate11 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef11, "certificate11")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef12}>
          <Certificate12/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef12, "certificate12")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef13}>
          <Certificate13/>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef13, "certificate13")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef14}>
          <Certificate14 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef14, "certificate14")}
          >
            Download 
          </button>
        </div>
      </div>


      <div>
        <div ref={certificateRef15}>
          <Certificate15 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef15, "certificate15")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef16}>
          <Certificate16 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef16, "certificate16")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef17}>
          <Certificate17 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef17, "certificate17")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef18}>
          <Certificate18 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef18, "certificate18")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef19}>
          <Certificate19 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef19, "certificate19")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef20}>
          <Certificate20 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef20, "certificate20")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef21}>
          <Certificate21 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef21, "certificate21")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef22}>
          <Certificate22 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef22, "certificate22")}
          >
            Download 
          </button>
        </div>
      </div>

      <div>
        <div ref={certificateRef23}>
          <Certificate23 />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center  bg-blue-500 text-white px-6 py-2 mb-4 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef23, "certificate23")}
          >
            Download 
          </button>
        </div>
      </div>





    </div>
  );
}

export default App;
