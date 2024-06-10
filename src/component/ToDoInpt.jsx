import { useEffect, useState } from "react";
import { DisplayToDO } from "./DisplayToDo";
import Head from "./Head";

export const InptToDo = () => {
  const [inpt, setInpt] = useState("No Value Present..");
  const [data, setData] = useState([]);
  const [bool, setBool] = useState(false);

  const addToDo = (e) => {
    setInpt(e.target.value);
  };

  const submitToDO = () => {
    setData((prevData) => [...prevData, inpt]);
  };

  const toggleDarkMode = () => {
    setBool(!bool);
  };

  useEffect(() => {
    if (data.length !== 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <div
      className={`${
        bool
          ? "flex flex-col items-center p-4 bg-black h-72 shadow-xl text-white"
          : "flex flex-col items-center p-4 bg-gray-100 h-72 shadow-xl text-black"
      }`}
    >
      <Head />
      <button
        onClick={toggleDarkMode}
        className={`${bool ? "bg-white text-black mb-1 hover:bg-white hover:text-black hover:duration-700":"bg-black text-white mb-1 hover:bg-white hover:text-black hover:duration-700"}`}
      >
       {bool ? "DARK" : "Light"}
      </button>
      <div className="mb-4">
        <input
          onChange={addToDo}
          type="text"
          value={inpt}
          className="p-2 border border-gray-300 rounded mr-2 text-black"
        />
        <button
          onClick={submitToDO}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
      <DisplayToDO data={data} />
    </div>
  );
};
