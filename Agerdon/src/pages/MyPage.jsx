import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Person3 from "../assets/Person3.png";
import Usage from "../assets/Usage.png";

const routeData = [
  { day: "월", from: "연세대학교 강남센터", to: "홍대입구역 9번 출구" },
  { day: "화", from: "상수역 7번 출구", to: "우리카드 은행지점" },
  { day: "수", from: "망원역 4번 출구", to: "서울대입구역 1번 출구" },
  { day: "목", from: "마포 경찰서", to: "홍대입구역 9번 출구" },
];

const historyData = [
  { date: "2025.01.29", time: "03:29", partner: "김영희", price: 55300 },
  { date: "2025.01.27", time: "22:23", partner: "김건수", price: 43300 },
  { date: "2025.01.27", time: "22:23", partner: "김건수", price: 43300 },
];

export default function MyPage() {
  return (
    <div className="max-w-[960px] mx-auto p-8 text-gray-800">
      {/* 상단 네비게이션 */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex space-x-10 text-sm font-semibold">
          <a href="#">이용 안내</a>
          <a href="#">매칭/예약</a>
          <a href="#">커뮤니티</a>
        </div>
        <a href="#" className="text-sm text-gray-600">
          내정보
        </a>
      </div>

      {/* 프로필 */}
      <div className="flex items-center space-x-6 mb-8">
        <img src={Person3} alt="profile" className="w-24 h-24 rounded-full object-cover" />
        <div className="flex-1">
          <h2 className="text-xl font-bold">김철수 님</h2>
          <p className="text-sm text-gray-500">rlacjfth8184@gmail.com</p>
          <p className="text-sm text-gray-500">2000년 00월 00일생 | 남</p>
        </div>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded text-sm">정보수정</button>
          <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">로그아웃</button>
        </div>
      </div>

      {/* 이용 내역 */}
      <div className="mb-10">
        <h3 className="font-semibold mb-3">이용 내역</h3>
        <div className="bg-gray-50 rounded-xl divide-y">
          {historyData.map((h, idx) => (
            <div key={idx} className="flex justify-between items-center px-6 py-4">
              <div className="flex items-center gap-3">
                <span>
                  <img src={Usage} />
                </span>
                <span className="text-sm text-gray-600">
                  {h.date} {h.time}
                </span>
              </div>
              <div className="text-sm">
                {h.partner}님과 동승 |{" "}
                <span className="font-bold">{h.price.toLocaleString()}원</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 경로 설정 */}
      <div>
        <h3 className="font-semibold mb-3">나의 경로 설정</h3>
        <p className="text-sm text-gray-600 mb-4">
          AI가 나의 일주일 경로 데이터를 분석했어요. <br />안 맞는 부분은 수정과 삭제해보세요.
        </p>
        <div className="space-y-3">
          {routeData.map((r, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded">
                  {r.day}
                </span>
                <div className="text-sm">{r.from}</div>
                <span className="mx-2">→</span>
                <div className="text-sm">{r.to}</div>
              </div>
              <div className="flex gap-2 text-gray-500">
                <FiEdit2 className="cursor-pointer" />
                <FiTrash2 className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
