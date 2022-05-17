import React from "react";
import Image from "next/image";
import place1 from "../../public/images/place-1.png";
import dicountIcon from "../../public/images/IconDiscount.svg";
import locationIcon from "../../public/images/locationIcon.svg";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  const placesData = {
    Data: [
      {
        id: 1,
        name: " Mbak Yayuk - Grand Mall",
        rating: 4.8,
        category: "Laptop, Electronic Products",
        range: 0.2,
        closes: "8 PM",
        promo: true,
        closed: false,
        link: "#",
      },
      {
        id: 2,
        name: "Gramedia - Solo Square",
        rating: 4.8,
        category: "Gym, Electronics",
        range: 1.0,
        closes: "8 PM",
        promo: false,
        closed: false,
        link: "#",
      },
      {
        id: 3,
        name: "iBox - The Park",
        rating: 4.8,
        category: "iPhone, iMac, Macbook",
        range: 1.8,
        closes: "15m",
        promo: true,
        closed: false,
        link: "#",
      },
      {
        id: 4,
        name: "Candi Elektronik - Grand Mall",
        rating: 4.8,
        category: "Smart TV, Air Conditioner",
        range: 0.2,
        closes: "8 PM",
        promo: false,
        closed: true,
        link: "#",
      },
      {
        id: 5,
        name: "Mi Store - Solo Paragon",
        rating: 4.8,
        category: "Mi Products",
        range: 1.0,
        closes: "8 PM",
        promo: false,
        closed: false,
        link: "#",
      },
      {
        id: 6,
        name: " Mbak Yayuk - Grand Mall",
        rating: 4.8,
        category: "Laptop, Electronic Products",
        range: 1.0,
        closes: "8 PM",
        promo: false,
        closed: true,
        link: "#",
      },
    ],
  };

  return (
    <div className="relative flex flex-col">
      {placesData.Data.map((place) => {
        return (
          <>
            <a href={place.link} key={place.id}>
              <div
                className={`relative mt-5 flex gap-4 ${
                  place.closed ? "text-gray-primary" : ""
                }`}
              >
                <div className="relative">
                  {place.promo && (
                    <div className="absolute -left-1 top-4 z-10 rounded-sm bg-orange py-[2px] px-2 text-tinyXs font-bold text-white">
                      Promo
                    </div>
                  )}
                  <Image
                    src={place1}
                    alt="places"
                    width={100}
                    height={100}
                    className="absolute rounded-xl"
                  />
                </div>
                <div className="info_place_parent z-20 flex flex-col pt-1">
                  <div className="flex">
                    <div className="mr-2 text-base font-medium">
                      {place.name}
                    </div>
                    {place.promo && (
                      <Image src={dicountIcon} alt="discountIcon" />
                    )}
                  </div>
                  <div className="mt-1 flex h-2 content-center">
                    <AiFillStar color="yellow" />
                    <div className="ml-2 flex text-tiny text-gray-primary">
                      <div className="">{place.rating}</div>
                      <span className="mx-2">•</span>
                      <div className="">{place.category}</div>
                    </div>
                  </div>
                  <hr className="mt-5 mb-3 border border-dashed text-gray-primary" />
                  <div className="flex content-center">
                    <Image src={locationIcon} alt="locationIcon" />
                    <div className="mx-3 text-tiny font-normal">
                      {place.range} KM
                    </div>
                    <div className={`text-tiny font-bold text-gray-primary`}>
                      Closes at {place.closes}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </>
        );
      })}
    </div>
  );
};

export default Places;
