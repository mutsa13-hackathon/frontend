import React from "react";
export const Modal = () => {
  

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
    >
      <div className="relative bg-white rounded-xl px-6 pt-10 pb-8 w-80 text-center">
        <button
          className="absolute top-4 right-6 cursor-pointer text-gray-800 text-xl"
        >
          X
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-3">
          모달 컴퍼넌트
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          내용1 <br />
          내용2 
        </p>

        <button
          className="w-full py-2 cursor-pointer rounded-md bg-main text-white font-semibold hover:opacity-90 transition"
        >
          모달 버튼
        </button>
      </div>
    </div>
  );
};
