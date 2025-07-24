import { useNavigate } from "react-router-dom";
import CarImage from "../assets/car.svg";
import Button from "../component/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleToSearch = () => {
    navigate("/search");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 gap-16 bg-white">
      {/* 왼쪽 입력 영역 */}
      <div className="w-full max-w-xl space-y-12 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          어디로 갈 예정이세요?
        </h1>

        <div className="relative space-y-6 pl-6">
          {/* 연결선 및 점 */}
          <div className="absolute left-0 top-2 flex flex-col items-center gap-6 h-full mt-4">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 "></div>
            <div className="h-[40px] w-px bg-gray-300"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-main"></div>
          </div>

          {/* 출발지 입력 */}
          <div className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="출발지를 입력하세요."
              onClick={handleToSearch}
              readOnly
              className="w-full h-[70px] px-5 py-4 border border-gray-300 rounded-xl bg-white text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main"
            />

            {/* 도착지 입력 */}
            <input
              type="text"
              placeholder="도착지를 입력하세요."
              onClick={handleToSearch}
              readOnly
              className="w-full h-[70px] px-5 py-4 border border-gray-300 rounded-xl bg-white text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main"
            />
          </div>
        </div>

        {/* 검색 버튼 */}
        <Button type="submit" variant="Search" className="text-lg h-[60px] rounded-xl ml-4">
          검색하기
        </Button>
      </div>

      {/* 오른쪽 이미지 영역 */}
      <div className="flex w-full justify-center ml-50">
        <img
          src={CarImage}
          alt="자동차 일러스트"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
