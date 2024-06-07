import { useState } from "react";
import { DisplayToDO } from "./DisplayToDo";

export const InptToDo = () => {
  const [inpt, setInpt] = useState("No Value Present..");
  const [data, setData] = useState([]);


  const addToDo = (e) => {
    setInpt(e.target.value); //'Ashish'
  };

  const submitToDO = () => {
    //['Rajat','Ashish']
    //['Rajat']
    // ['Rajat','Ashish'] => data
    setData((prevData) => [...prevData, inpt]); //, []
    
  };
  return (
    <>
      <input onChange={addToDo} type="text" name="" id="" value={inpt} />
      <button onClick={submitToDO}>+</button>
      <DisplayToDO data={data} />
    </>
  );
};
