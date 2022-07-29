import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Hero from "../../public/images/item-list-hero.png";
import iconDiscountOrange from "../../public/images/iconDiscountOrange.svg";
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import laptopImage from "../../public/images/laptop.png";
import psImage from "../../public/images/ps.png";
import vapeImage from "../../public/images/vape.png";
import hpImage from "../../public/images/hp.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const PlaceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(router.pathname);

  const isFavorite = true;

  const ratings = [
    {
      id: 1,
      title: "Ratings",
      value: 4.8,
    },
    {
      id: 2,
      title: "Opening hours",
      value: "7 AM - 8 PM",
    },
    {
      id: 3,
      title: "Distance",
      value: "< 0.2km",
    },
    {
      id: 4,
      title: "Distance",
      value: "< 0.2km",
    },
    {
      id: 5,
      title: "Distance",
      value: "< 0.2km",
    },
  ];

  const itemList = [
    {
      id: 1,
      name: "Macbook Terbaru Murah",
      photo: laptopImage,
      price: "$ 89,99",
      isAvailable: true,
    },
    {
      id: 2,
      name: "Playsatation 5 KW Super",
      photo: psImage,
      price: "$ 99",
      isAvailable: true,
    },
    {
      id: 3,
      name: "Vaporizer Terbaik 2021",
      photo: vapeImage,
      price: "$ 5,99",
      isAvailable: true,
    },
    {
      id: 4,
      name: "Smartphone Singosarenan",
      photo: hpImage,
      price: "$ 89,99",
      isAvailable: false,
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className=" flex w-full flex-col bg-item-list md:w-96 ">
        <div className="relative flex ">
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
          <Image
            src={Hero}
            alt="item list hero"
            className=" top-0 rounded-b-primary"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="z-20 -mt-10 flex h-20 w-80 items-center justify-between rounded-secondary bg-white px-5 shadow-secondary">
            <div className="flex flex-col">
              <div className="flex">
                <div className="mr-2 text-base font-bold">iBox - The Park</div>
                <Image src={iconDiscountOrange} alt="" />
              </div>
              <div className="text-xs font-normal text-gray-primary">
                iPhone, iMac, Macbook
              </div>
            </div>
            <div className="h-10 w-10 rounded-lg bg-primary-color opacity-10"></div>
          </div>
        </div>
        <div className="mt-5">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            style={{ paddingLeft: "36px" }}
          >
            {ratings.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex h-14 w-max cursor-grab items-center rounded-secondary bg-white px-3">
                    <div className="mr-2 h-9 w-9 rounded-lg bg-primary-color opacity-10"></div>
                    <div className="flex flex-col">
                      <div className="text-tiny font-medium text-gray-primary">
                        {item.title}
                      </div>
                      <div className="text-xs font-bold">{item.value}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div className="w-80 border border-dashed"></div>
        </div>
        <div className="mt-5 mb-4 pl-8 text-base font-bold">Top Popular</div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 flex-wrap  gap-8">
            {itemList.map((item) => {
              return (
                <div className="relative h-56" key={item.id}>
                  <Image
                    className="h-36 w-36 rounded-lg"
                    src={item.photo}
                    alt={item.name}
                  />
                  <div className="mt-3 mb-6 text-xs font-normal">
                    {item.name}
                  </div>

                  <div className="absolute bottom-0 flex w-full items-center justify-between">
                    {item.isAvailable ? (
                      <div className="text-sm font-bold text-price">
                        {item.price}
                      </div>
                    ) : (
                      <div className="text-sm font-bold text-out-of-stock">
                        Out of stock
                      </div>
                    )}
                    <a
                      href="#"
                      className={`rounded-md border ${
                        item.isAvailable
                          ? "border-primary-color text-primary-color"
                          : "pointer-events-none border-inactive-text text-inactive-text"
                      } py-2 px-3 text-tiny font-normal `}
                    >
                      Add
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-5 flex items-center justify-center">
          <div className="w-80 border border-dashed"></div>
        </div>
        <div className="mb-4 pl-8 text-base font-bold">Smart Phone</div>
        <div className="flex items-center justify-center">
          <div className="grid w-full grid-rows-1">
            <div className="flex items-center justify-between">
              <div className="">
                <Image src={laptopImage} alt="" />{" "}
              </div>
              <div className="">1</div>
              <div className="">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
