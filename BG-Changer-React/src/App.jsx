import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full  h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex gap-10 bottom-12 rounded-md  justify-center inset-x-0 px-2">
          <div className="flex  flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}

            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}

            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "crimson" }}
              onClick={() => setColor("crimson")}

            >
              Crimson
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Teal" }}
              onClick={() => setColor("teal")}

            >
              Teal
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}

            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}

            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}

            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}

            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
