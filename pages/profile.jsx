import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Navigation from "./components/Navigation";
import ulin from "../public/images/profile-ulin.png";
import sigit from "../public/images/profile-sigit.jpeg";
import iksan from "../public/images/profile-iksan.jpeg";

export default function Profile() {
  const datas = [
    { name: "Aldilla Ulinnaja", nim: "L200200090", image: ulin },
    { name: "Sigit Wahyudi", nim: "L200200145", image: sigit },
    { name: "M. Ikhsan Fahrudin", nim: "L200200151", image: iksan },
  ];
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-between bg-item-list py-7">
        <div className="flex h-screen w-full flex-col justify-between px-8 md:w-96">
          <div className="mb-7 flex w-full items-center justify-center">
            <div className="text-center text-base font-bold">About Us</div>
          </div>
          <h2 className="text-lg">
            Aplikasi <em className="font-bold text-primary-color">Shopcut </em>
            demo ini dibuat oleh :
          </h2>
          {datas.map((data, index) => (
            <div
              className="flex items-center rounded-3xl p-6 shadow-md"
              key={index}
            >
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14">
                  <Image
                    src={data.image}
                    alt="profile"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <span>{data.name}</span>
                  <em className="text-sm">{data.nim}</em>
                </div>
              </div>
            </div>
          ))}
          <Navigation />
        </div>
      </div>
    </>
  );
}
