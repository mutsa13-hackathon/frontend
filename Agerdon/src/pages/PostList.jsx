import { FaRegCommentDots } from "react-icons/fa6";

const posts = [
  {
    id: 1,
    title: "홍익대학교 → 망원역 구합니다.",
    content: "이따 저녁 6시에 같이 예약하실 분 구해요!",
    time: "2분 전",
    comments: 6,
  },
  {
    id: 2,
    title: "상수역 → 서울대입구 할리스 구합니다.",
    content: "조용하신 분이었으면 좋겠어요 지금 구해요.",
    time: "8분 전",
    comments: 8,
  },
  {
    id: 3,
    title: "망원역 → 레드로드거리 구합니다.",
    content: "같이 편하게 수다떨 수 있는 사람이었으면 좋겠어요! 2...",
    time: "8분 전",
    comments: 10,
  },
  {
    id: 4,
    title: "조형관 → 홍대 아트박스점 구합니다.",
    content: "내일 오전 6시 2인 동승자 구합니다. 말이 많으신 분은...",
    time: "9분 전",
    comments: 1,
  },
  {
    id: 5,
    title: "홍대입구역 → 신림역 구합니다.",
    content: "",
    time: "10분 전",
    comments: 0,
  },
];

const PostList = () => {
  return (
    <div className="w-full max-w-2xl bg-[#EEEEEE] px-4 py-6 rounded-lg mx-auto">
      <div className="flex justify-end items-center mb-4 text-sm text-gray-600">
        최신순 <span className="ml-1">▼</span>
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-[16px] text-gray-900 mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-1">{post.content}</p>
              </div>

              <div className="flex flex-col items-end justify-between h-full text-xs text-gray-400 gap-2">
                <span>{post.time}</span>
                <div className="flex items-center gap-1 text-gray-500">
                  <FaRegCommentDots size={16} />
                  <span className="text-sm">{post.comments}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
