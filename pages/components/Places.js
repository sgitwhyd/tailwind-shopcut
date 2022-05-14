import React from "react";
import Image from "next/image";
import place1 from "../../public/images/place-1.png";

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
      <div className="info_place_parent flex flex-col">
        <div className="">fsfdsfdsf</div>
      </div>
    </div>
  );
};

export default Places;
