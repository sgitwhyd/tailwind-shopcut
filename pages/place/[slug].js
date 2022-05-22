import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "../../public/images/item-list-hero.png";
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const PlaceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(router.pathname);

  const isFavorite = true;

  return (
    <div className="relative">
      <div className="absolute top-7 flex w-full justify-between px-8">
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-md border border-white bg-white opacity-75 shadow-primary backdrop-blur-sm">
          <AiOutlineLeft size={18} />
        </div>
        <div className=" flex">
          <div className="z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-white opacity-75 shadow-primary backdrop-blur-sm">
            {isFavorite ? (
              <MdFavorite fill="red" size={22} />
            ) : (
              <MdOutlineFavoriteBorder size={22} />
            )}
          </div>
          <div className="z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white opacity-75 shadow-primary backdrop-blur-sm">
            <AiOutlineShareAlt />
          </div>
        </div>
      </div>
      <div className="absolute">
        <Image
          src={Hero}
          alt="item list hero"
          className=" top-0 rounded-b-primary"
        />
      </div>
    </div>
  );
};

const getStaticProps = () => {};

export default PlaceDetail;
