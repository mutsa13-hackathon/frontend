import React from "react";
import Person1 from "../assets/Person1.png";

const Post = () => {
  // 더미 댓글 예시 데이터
  const comments = [
    {
      id: 1,
      user: {
        name: "챗바퀴소녀",
        avatar: "https://via.placeholder.com/32", // 프로필 이미지
      },
      content: "저 탈래요!",
      createdAt: "07/22 00:27",
    },
    {
      id: 2,
      user: {
        name: "슬픔왕언냐",
        avatar: "https://via.placeholder.com/32",
      },
      content: "앗..이미 누가 했네요ㅠㅠ",
      createdAt: "07/22 00:27",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* 게시글 박스 */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow px-8 py-6 mb-6">
        {/* 작성자 정보 */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/Person1.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-sm font-semibold text-gray-800">하늘을나는다람쥐</div>
            <div className="text-xs text-gray-500">07/22 00:27</div>
          </div>
        </div>

        {/* 게시글 제목 + 본문 */}
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            홍익대학교 → 망원역 구합니다.
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            이따 저녁 6시에 같이 예약하실 분 구해요!<br />
            말 거는 건 싫어하는 편이고 제 경로와 겹치는 분들은 편하게 댓글 달아주세요!
          </p>
        </div>

        {/* 매칭 버튼 */}
        <div className="flex justify-end">
          <button className="bg-main text-white text-sm px-6 py-2 rounded-md transition">
            매칭하기
          </button>
        </div>
      </div>

      {/* 댓글 영역 */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow px-8 py-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">댓글</h3>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex justify-between items-start">
              {/* 왼쪽: 프로필 + 이름 + 내용 */}
              <div className="flex gap-3">
                <img
                  src='/Person1.png'
                  alt="user profile"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    {comment.user.name}
                  </div>
                  <div className="text-sm text-gray-700">{comment.content}</div>
                </div>
              </div>

              {/* 오른쪽: 시간 */}
              <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                {comment.createdAt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;