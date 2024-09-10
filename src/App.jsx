import React, { useRef } from "react";
import Certificate from "./Component/Certificate";
import Certificate1 from "./Component1/Certificate1";
import Certificate2 from "./Component2/Certificate2";
import { toPng } from "html-to-image";

function App() {
  const certificateRef = useRef(null);
  const certificateRef1 = useRef(null);
  const certificateRef2 = useRef(null);

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
    <div className="bg-gray-100 min-h-screen flex items-center justify-evenly">
      {/* Certificate 1 */}
      <div>
        <div ref={certificateRef}>
          <Certificate />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="text-center w-1/2 bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef, "certificate")}
          >
            Download Certificate
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
            className="text-center w-1/2 bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef1, "certificate1")}
          >
            Download Certificate 1
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
            className="text-center w-1/2 bg-blue-500 text-white px-6 py-2 mt-4 hover:bg-blue-400 cursor-pointer"
            onClick={() => handleDownloadCertificate(certificateRef2, "certificate2")}
          >
            Download Certificate 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
