import Image from "next/image";
import Hero from "../public/images/home-hero.png";
import { FaAngleRight, FaBabyCarriage } from "react-icons/fa";
import MapsIcon from "../public/images/maps-icon.png";
import CategoryWrapper from "./components/categoryWrapper";
import { BiRestaurant, BiLaptop } from "react-icons/bi";
import { SiMarketo, SiBookstack } from "react-icons/si";
import { CgLayoutGridSmall } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className=" relative flex h-52 w-full flex-col justify-center bg-primary-color">
        <div className="z-10 p-5">
          <div className="text-lg font-light text-white">Hi, Queen</div>
          <div className="text-2xl font-bold text-white">
            What shop do <br /> you need?
          </div>
        </div>
        <div className="absolute right-0 bottom-0 z-0">
          <Image src={Hero} alt="hero-picture" width={250} height={130} />
        </div>
      </div>
      <section className="home-menus">
        <div className="absolute -mt-5  h-96 w-full rounded-t-3xl bg-white p-5">
          <section className="address">
            <div className="flex w-full content-center justify-between">
              <div className="flex">
                <Image src={MapsIcon} width={50} height={50} alt="maps-icon" />
                <div className="ml-4 pt-2">
                  <div className="text-xs font-bold">
                    Adi Sucipto No 347, Manahan
                  </div>
                  <div className="text-tiny font-normal text-gray-primary">
                    Change location
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <FaAngleRight />
              </div>
            </div>
          </section>
          <section className="category pt-5">
            <div className="text-lg font-normal">
              Our <span className="font-bold">Categories</span>
            </div>
            <div className="text-xs font-normal text-gray-primary">
              <span>7</span> categories available
            </div>
            <div className="grid grid-cols-3 gap-4">
              <CategoryWrapper categoryName="Restaurant">
                <BiRestaurant size={25} />
              </CategoryWrapper>
              <CategoryWrapper categoryName="Supermarket">
                <SiMarketo size={25} />
              </CategoryWrapper>
              <CategoryWrapper categoryName="Baby & Kids">
                <FaBabyCarriage size={25} />
              </CategoryWrapper>
              <CategoryWrapper categoryName="Electronics">
                <BiLaptop size={25} />
              </CategoryWrapper>
              <CategoryWrapper categoryName="Books">
                <SiBookstack size={25} />
              </CategoryWrapper>
              <CategoryWrapper categoryName="Other">
                <CgLayoutGridSmall size={25} />
              </CategoryWrapper>
            </div>
          </section>
          <section id="main-content" className="mt-7">
            <div className="search">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <input
                  type="search"
                  name="q"
                  className="relative w-full rounded-lg  bg-gray-input py-4  pl-8 text-xs text-gray-primary focus:text-gray-900 focus:outline-none"
                  placeholder="Search Electronics Store"
                  autoComplete="off"
                />
                <span className="absolute inset-y-0  right-3 flex items-center pl-2 focus:bg-gray-input">
                  <button
                    type="submit"
                    className="focus:shadow-outline p-1 focus:outline-none"
                  >
                    <FiSearch size={25} />
                  </button>
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
