import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [lenth, setLenth] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charaterAllow, setCharaterAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "01234567890";
    if (charaterAllow) str += "!@#$%^&*()_-+={}[]~";

    // loop *****
    for (let i = 1; i <= lenth; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [lenth, numberAllow, charaterAllow, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // UseEffect *****

  useEffect(() => {
    passwordGenerator();
  }, [lenth, numberAllow, charaterAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 p-5 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-2xl text-center text-white mb-4 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full  px-4 p-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-700 p-2 outline-none text-white px-3  py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={lenth}
              className="cursor-pointer"
              onChange={(e) => {
                setLenth(e.target.value);
              }}
            />
            <label htmlFor="">Length:{lenth}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charaterAllow}
              id="charaterInput"
              onChange={() => {
                setCharaterAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Charater</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
