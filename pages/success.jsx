import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import complete from "../public/images/complete.png";

export default function Success() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-between bg-item-list py-7">
      <div className=" flex w-full flex-col px-8 md:w-96">
        <div className="flex w-full items-center justify-center ">
          <div className="text-center text-base font-bold">Payment</div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-[100vh] items-center justify-center">
          <div
            style={{ borderTopColor: "transparent" }}
            className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"
          ></div>
        </div>
      ) : (
        <>
          <div className="flex w-full flex-col items-center justify-center gap-7 px-8 md:w-96">
            <h2 className="text-xl font-semibold">Yay Complete!</h2>
            <div className="max-w-[230px]">
              <Image src={complete} alt="complete" />
            </div>
            <p className="text-center text-sm opacity-60">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>

          <div className="flex w-full flex-col px-8 md:w-96">
            <Link href={"/"} passHref>
              <button className="mt-3 w-full rounded-[14px] bg-[#944E6C] py-5 text-center text-sm font-bold text-white ">
                Return to Home
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
