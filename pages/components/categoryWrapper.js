import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";

function CategoryWrapper({ categoryName, children }) {
  const clicked = () => {
    console.log("helo");
  };

  return (
    <>
      <div className="mx-auto mt-5 flex flex-col" onClick={() => clicked()}>
        <div className="relative flex h-16 w-16 content-center justify-center rounded-full border-2 p-2">
          {/* <div className="absolute top-0 -right-1 z-10 flex h-5 w-5 content-center justify-center rounded-full bg-primary-color">
            <FaCheck size={13} className="pt-1" />
          </div> */}
          <div className="p-2">{children}</div>
        </div>
        <div className="mt-3 text-center text-sm font-normal ">
          {categoryName}
        </div>
      </div>
    </>
  );
}

export default CategoryWrapper;
