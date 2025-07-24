import React from "react";
import { useState } from "react";
import MapData from "../data/MapData.json";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    if(value === ""){
      setFilteredData([]);
    } else {
      const filtered = MapData.filter((item)=>
        item.name.includes(value)
      );
      setFilteredData(filtered);
    }
  }

  return(
  <div className="relative space-y-0">
  <div className="absolute left-[-20px] top-1 flex flex-col items-center justify-center">
    <div className="w-3 h-3 rounded-full border-2 border-gray-400 mt-[13px]"></div>
    <div className="h-[52px] w-px bg-gray-300 mt-2"></div>
    <div className="w-3 h-3 rounded-full bg-main  mb-[7px] mt-[1px]"></div>
  </div>

  <input
    type="text"
    placeholder="출발지를 입력하세요."
    value={from}
    onChange={(e) => setFrom(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main"
  />


  <input
    type="text"
    placeholder="도착지를 입력하세요."
    value={to}
    onChange={handleToChange}
    className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main"
  />
      {filteredData.length > 0 && (
        <ul className="border border-gray-300 rounded-lg  bg-white shadow-sm overflow-hidden">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setTo(item.name);
                setFilteredData([]);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
  </div>
  
        
  );

}