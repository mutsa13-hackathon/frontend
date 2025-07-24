import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-b-[1px] border-black h-20 text-black bg-white flex items-center justify-end px-10">
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-semibold text-2xl text-main"
        >
          LOGO
        </Link>

        <div className="flex gap-4">
          <div>
            {" "}
            <CiBellOn size={30} />{" "}
          </div>
          <div>
            {" "}
            <CiCircleQuestion size={30} />{" "}
          </div>
          <div>
            {" "}
            <CiLogin size={30} />{" "}
          </div>
        </div>
      </div>
      <div className="mt-20 left-0 right-0 h-15 bg-white flex items-center justify-between text-black border-b-[1px] border-black">
        <p className="pl-30 font-bold hover:text-main cursor-pointer">이용 안내</p>
        <Link to="/" className="font-bold hover:text-main cursor-pointer">
          매칭/예약
        </Link>
        <Link to="/PostList" className="font-bold hover:text-main cursor-pointer">
          커뮤니티
        </Link>
        <Link to="/MyPage" className="pr-30 font-bold hover:text-main cursor-pointer">
          내정보
        </Link>
      </div>
    </>
  );
};

export default Navbar;
