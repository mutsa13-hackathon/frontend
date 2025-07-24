import { FaRegCommentDots } from "react-icons/fa6";
import posts from "../data/mockPost.json";
import React from "react";
import { Link } from "react-router-dom";
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
            <Link 
            to='/Post'
            className="flex justify-between items-start">
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
