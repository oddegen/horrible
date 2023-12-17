import { useState } from "react";

const Window = ({ title, children }) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="inset-0 flex items-center justify-center bg-opacity-50 z-10">
      <div className="bg-white rounded-lg border border-gray-400 shadow-lg w-96">
        <div className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white rounded-t-lg">
          <div className="font-extrabold text-yellow-900">{title}</div>
          <button
            className="text-white hover:text-gray-200 bg-red-900 text-2xl w-2"
            onClick={() => setClicked(!clicked)}
          >
            <span className="text-lg">
              {clicked ? <>&#x2713;</> : <>&times;</>}
            </span>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Window;
