import React from "react";
import Image from "next/image";
import place1 from "../../public/images/place-1.png";
import dicountIcon from "../../public/images/IconDiscount.svg";
import locationIcon from "../../public/images/locationIcon.svg";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  return (
    <div className="relative flex gap-3">
      <div className="relative">
        <div className="absolute -left-1 top-4 z-10 rounded-sm bg-orange py-1 px-3 text-tinyXs font-bold text-white">
          Promo
        </div>
        <Image
          src={place1}
          alt="places"
          width={100}
          height={100}
          className="absolute rounded-xl"
        />
      </div>
      <div className="info_place_parent z-20 flex flex-col">
        <div className="flex">
          <div className="mr-2 text-base font-medium">
            Mbak Yayuk - Grand Mall
          </div>
          <Image src={dicountIcon} alt="discountIcon" />
        </div>
        <div className="mt-1 flex h-2 content-center">
          <AiFillStar color="yellow" />
          <div className="ml-2 flex text-tiny text-gray-primary">
            <div className="">4.8</div>
            <span className="mx-2">•</span>
            <div className="">Laptop, Electronic Products</div>
          </div>
        </div>
        <hr className="mt-5 mb-3 border border-dashed text-gray-primary" />
        <div className="flex content-center">
          <Image src={locationIcon} alt="locationIcon" />
          <div className="mx-3 text-tiny font-normal">0.2 km</div>
          <div className="text-tiny font-bold text-gray-primary">
            Closes at 8 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
