import React from "react";
import Image from "next/image";
import Link from "next/link";
import place1 from "../../public/images/place-1.png";
import dicountIcon from "../../public/images/IconDiscount.svg";
import locationIcon from "../../public/images/locationIcon.svg";
import { AiFillStar } from "react-icons/ai";
import placesData from "../../data/places.json";

const Places = () => {
  return (
    <div className="relative flex flex-col">
      {placesData.places.map((place) => {
        return (
          <>
            <Link href={`place/${place.slug}`} key={place.id} replace passHref>
              <a>
                <div
                  className={`relative mt-5 flex cursor-pointer gap-4 ${
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
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Places;
