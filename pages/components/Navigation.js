import React from "react";
import Image from "next/image";
import profileIcon from "../../public/images/ProfileIcon.svg";
import { GrHomeRounded } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";

const Navigation = () => {
  return (
    <>
      <div className="sticky bottom-4 z-40 ml-[50%] w-4/6 -translate-x-1/2 rounded-full bg-red-600 py-6  drop-shadow-xl">
        <div className="flex justify-between px-8">
          <GrHomeRounded size={25} />
          <FiShoppingBag size={25} />
          <HiOutlineUser size={25} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
