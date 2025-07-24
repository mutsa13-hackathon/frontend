import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Person1 from "../assets/Person1.png";
import Person2 from "../assets/Person2.png";
import Person3 from "../assets/Person3.png";
import matches from "../data/mockData.json";

const getImageById = (id) => {
  switch (id) {
    case 1:
      return Person1;
    case 2:
      return Person2;
    case 3:
      return Person3;
    default:
      return Person1; // 기본 이미지
  }
};

const Match = () => {
  const [selectedGender, setSelectedGender] = useState("동성만");
  const [selectedAge, setSelectedAge] = useState("20-30대");
  const [passengerCount, setPassengerCount] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handlePayment = () => {
    if (selectedId === null) {
      alert("먼저 상대를 선택해주세요!");
      return;
    }
    navigate("/money");
  };

  return (
    <div className="bg-[#EEEEEE] flex gap-10 w-full mx-60 min-h-screen p-8">
      {/* 좌측 필터 */}
      <div className="w-[240px] mr-10">
        <div className="h-[420px] bg-white rounded-xl p-6 shadow-md space-y-6">
          <div className="pb-4 border-b border-gray-300">
            <p className="font-semibold mb-2">성별</p>
            {["전체", "동성만"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  checked={selectedGender === opt}
                  onChange={() => setSelectedGender(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div className="pb-4 border-b border-gray-300">
            <p className="font-semibold mb-2">연령대</p>
            {["10대", "20-30대", "40대 이상"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  checked={selectedAge === opt}
                  onChange={() => setSelectedAge(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-2">동승자 수</p>
            {[1, 2].map((num) => (
              <label key={num} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  checked={passengerCount === num}
                  onChange={() => setPassengerCount(num)}
                />
                <span>{num}명</span>
              </label>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-main text-white py-2 rounded-md font-semibold mt-4"
          onClick={handlePayment}
        >
          결제하기
        </button>
      </div>

      {/* 우측 결과 */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">
          총 <span className="text-main">23명</span>의 매칭 상대를 찾았어요.
        </h2>

        <div className="grid grid-cols-4 gap-4 text-sm  text-gray-500 mb-5 px-6 py-2 border border-none rounded-2xl bg-white ">
          <div className="col-span-1">프로필</div>
          <div className="col-span-1 text-center">한줄 평점</div>
          <div className="col-span-1 text-center">내 경로와의 일치률</div>
          <div className="col-span-1 text-center">내 예상 요금</div>
        </div>

        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              onClick={() => handleSelect(match.id)}
              className={`grid grid-cols-4 gap-4 items-center cursor-pointer rounded-xl px-6 py-4 transition-all 
                ${
                  selectedId === match.id
                    ? "bg-blue-100 border-main border-2"
                    : "bg-white shadow border border-transparent hover:border-blue-300"
                }`}
            >
              {/* 프로필 */}
              <div className="col-span-1 flex items-center space-x-4">
                <img
                  src={getImageById(match.id)}
                  alt={match.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{match.name} 님</p>
                </div>
              </div>

              {/* 한줄평 */}
              <div className="col-span-1 text-center">
                <p>{match.tag}</p>
              </div>

              {/* 일치율 */}
              <div className="col-span-1 text-center">
                <p className="font-bold">{match.matchRate}%</p>
              </div>

              {/* 요금 */}
              <div className="col-span-1 text-center">
                <p className="font-bold">{match.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
