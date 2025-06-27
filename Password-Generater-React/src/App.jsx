import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook

  const PasswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "{[*@#$%-+=-/~^(!?)]}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copypassword = useCallback(() => {
    PasswordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 underline">
          Password Generator
        </h1>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={password}
              className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your password"
              readOnly
              ref={PasswordRef}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={copypassword}
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input
                className="w-80"
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-sm font-bold text-orange-600">
                Length: {length}
              </label>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-1 text-gray-700">
                <input
                  type="checkbox"
                  id="numberInput"
                  className="accent-blue-600"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                Number
              </label>
              <label className="flex items-center gap-1 text-gray-700">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  id="CharInput"
                  defaultChecked={charAllowed}
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
