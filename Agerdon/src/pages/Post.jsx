import React from "react";

const Post = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-start justify-center pt-20 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6 space-y-6">
        {/* 상단 작성자 정보 */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/36"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">하늘을나는다람쥐</span>
            <span className="text-xs text-gray-500">07/22 00:17</span>
          </div>
        </div>

        {/* 제목 + 본문 */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-1">
            홍익대학교 → 망원역 구합니다.
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            이른 저녁 6시쯤 같이 타실 분을 구해요!<br />
            편하게 댓글 달아주세요 :)
          </p>
        </div>

        {/* 댓글 리스트 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-800">댓글</h3>
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-800">
            <strong className="font-medium">꽈배기소녀:</strong> 저요! 탈래요!
          </div>
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-800">
            <strong className="font-medium">흰둥할머니:</strong> ㅜㅜ 이미 누가 했네요 ㅠㅠ
          </div>
        </div>

        {/* 매칭 버튼 */}
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-md transition">
            매칭하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;