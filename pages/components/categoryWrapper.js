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
          {/* <div className='rounded-full w-5 h-5 flex justify-center content-center bg-primary-color absolute top-0 z-10 -right-1'>
						<FaCheck size={13} className='pt-1' />
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
