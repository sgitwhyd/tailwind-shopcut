import React from "react";
import Image from "next/image";
import profileIcon from "../../public/images/ProfileIcon.svg";
import { GrHomeRounded } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import { useCart } from "./cart.context";

const Navigation = () => {
  const {
    state: { cart },
  } = useCart();

  return (
    <>
      <div className="sticky bottom-4 z-40 ml-[50%] w-4/6 -translate-x-1/2 rounded-full bg-white py-6  drop-shadow-xl">
        <div className="flex justify-between px-8">
          <Link href={"/"} passHref>
            <div className="relative cursor-pointer">
              {/* <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-600 outline outline-2 outline-white"></div> */}
              <GrHomeRounded size={25} />
            </div>
          </Link>
          <Link href={"/cart"} passHref>
            <div className="relative cursor-pointer">
              {cart.length > 0 && (
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-600 outline outline-2 outline-white"></div>
              )}
              <FiShoppingBag size={25} />
            </div>
          </Link>
          <Link href={"/profile"} passHref>
            <div className="relative cursor-pointer">
              <HiOutlineUser size={25} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
