import React, { useState } from "react";
import MapData from "../data/MapData.json";
import Button from "../component/Button";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = MapData.filter((item) =>
        item.name.includes(value)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="flex px-32 py-16 gap-12 items-start justify-start w-full">
      {/* 왼쪽 입력 폼 */}
      <div className="flex-1 max-w-[480px]">
        <div className="relative">
          {/* 아이콘 라인 */}
          <div className="absolute left-[-20px] top-1 flex flex-col items-center justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-gray-400 mt-[13px]" />
            <div className="h-[52px] w-px bg-gray-300 mt-2" />
            <div className="w-3 h-3 rounded-full bg-main mb-[7px] mt-[1px]" />
          </div>

          {/* 출발지 입력 */}
          <input
            type="text"
            placeholder="출발지를 입력하세요."
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main"
          />

          {/* 도착지 입력 */}
          <input
            type="text"
            placeholder="도착지를 입력하세요."
            value={to}
            onChange={handleToChange}
            className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main"
          />

          {/* 자동완성 리스트 */}
          {filteredData.length > 0 && (
            <ul className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden mt-1">
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

        {/* 매칭하기 버튼 */}
        <Button
          type="button"
          variant="Search"
          className="w-full h-12 text-white mt-4"
        >
          매칭하기
        </Button>
      </div>

      {/* 오른쪽 지도 이미지 */}
      <div className="flex-1 rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <img src="/map.jpg" alt="지도" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};