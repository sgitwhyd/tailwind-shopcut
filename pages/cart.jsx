import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import IconMoney from "../public/images/iconMoney.svg";
import { useCart } from "./components/cart.context";

const Cart = () => {
  const [total, setTotal] = React.useState(0);
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const totalPayment = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    setTotal(totalPayment);
  }, [totalPayment]);

  return (
    <div
      className={`flex justify-center bg-item-list pt-7 ${
        cart.length > 0 ? "h-full " : "h-screen"
      }`}
    >
      <div className=" mb-14 flex w-full flex-col px-8 md:w-96">
        <div className=" mb-7 flex w-full items-center ">
          <Link href={"/"} passHref>
            <div className="z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md">
              <AiOutlineLeft size={18} />
            </div>
          </Link>
          <div className="w-[280px] text-center text-base font-bold">Cart</div>
        </div>

        <div className="text-xs font-bold text-black">
          {cart.length === 0 ? "Your cart is empty" : `${cart.length} items`}{" "}
        </div>
        {cart?.map((item) => (
          <div key={item.id} className="mt-4 flex h-36 justify-between gap-3">
            <div className="relative m-auto h-[78px] w-[78px]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                className=" rounded-md"
              />
            </div>
            <div className="flex w-[200px] flex-col justify-evenly">
              <div className="text-xs font-normal">{item.title}</div>
              <div className="text-sm font-bold text-price">${item.price}</div>
            </div>
            <div className="flex flex-col justify-evenly">
              <div
                className=" cursor-pointer text-xs text-red-500 "
                style={{
                  textAlign: "end",
                }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id: item.id },
                  });
                }}
              >
                remove
              </div>
              <div className="flex items-center">
                <div
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-[4px] border border-[#944E6C] text-[#944E6C]"
                  onClick={() => {
                    if (item.quantity > 1)
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity },
                      });
                  }}
                >
                  -
                </div>
                <div className=" h-5 w-5 text-center text-xs font-bold">
                  {item.quantity}
                </div>
                <div
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-[4px] bg-[#944E6C] text-white"
                  onClick={() => {
                    dispatch({
                      type: "INCREASE_QUANTITY",
                      payload: { id: item.id, quantity: item.quantity },
                    });
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <div className="mt-5 mb-12 border border-dashed"></div>
            <div className="relative h-fit rounded-[10px] bg-white p-5">
              <div className="mb-5 text-sm font-medium">Payment Summary</div>
              <div className="flex justify-between">
                <div className="text-xs font-normal text-inactive-text">
                  Price
                </div>
                <div className="text-xs font-medium ">
                  &#36; {totalPayment.toFixed(2)}
                </div>
              </div>
              <div className="absolute left-0 mt-4 w-full border border-dashed"></div>
              <div className="mt-8 flex justify-between">
                <div className="text-xs font-medium text-black">
                  Total Payment
                </div>
                <div className="text-sm font-bold ">&#36; {total}</div>
              </div>
            </div>
            <div className="mt-8 mb-5 border border-dashed"></div>
            {/* payment method */}
            <div className="mb-4 text-lg font-bold text-black">
              Select payment method
            </div>
            <div
              className="mb-16 flex w-full cursor-pointer justify-between gap-[10px] rounded-[10px] border border-[#944E6C] p-4"
              htmlFor="cash-payment"
            >
              <Image src={IconMoney} alt="money" width={34} height={34} />
              <div className="flex w-full flex-col justify-around">
                <div className="text-sm font-medium">Pay with Cash</div>
                <div className="text-tiny font-normal text-gray-primary">
                  Get 5% Discount
                </div>
              </div>
              <input id="cash-payment" type="radio" name="cash" checked />
            </div>
            {/* button continue */}
            <button className="mt-3 w-full rounded-[14px] bg-[#944E6C] py-5 text-center text-sm font-bold text-white ">
              Continue Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
