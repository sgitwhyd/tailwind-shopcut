import Image from "next/image";
import React from "react";
import CloseIcon from "../../public/images/iconClose.svg";
import { useCart } from "../components/cart.context";

const Modal = (props) => {
  const { open, product, handler } = props;
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const checkQauantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  };

  const checkItemInCart = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      return true;
    }
    return false;
  };

  const addToCart = (id, product) => {
    if (!checkItemInCart(id)) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    } else {
      increaseQuantity(id);
    }
  };

  const increaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: {
          id: item.id,
          quantity: item.quantity,
        },
      });
    }
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      if (item.quantity > 1) {
        dispatch({
          type: "DECREASE_QUANTITY",
          payload: {
            id: item.id,
            quantity: item.quantity,
          },
        });
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className={`fixed top-0 h-screen w-full md:w-96 ${
          open ? " z-[60] block bg-[#383434] opacity-75" : "z-[60] opacity-0"
        }`}
        onClick={handler}
      ></div>
      <div
        className={`
      fixed bottom-0 z-[70] h-fit  w-full rounded-t-3xl bg-white px-7 py-5 text-4xl text-black duration-500 ease-in-out md:w-96
      ${open ? "translate-y-0 " : "translate-y-full "}`}
      >
        <div className="mx-auto w-full">
          <div
            className=" w-full cursor-pointer"
            style={{
              textAlign: "end",
            }}
            onClick={handler}
          >
            <Image
              src={CloseIcon}
              alt="close icon"
              width={"32px"}
              height={"32px"}
            />
          </div>
          <div className="mx-auto w-[150px]">
            <Image
              src={product?.image}
              alt={product?.title}
              width={"150px"}
              height={"150px"}
            />
          </div>

          <div className="mt-4 text-base font-bold">{product?.title}</div>
          <div className="mt-2.5 text-sm font-bold text-price">
            $ {product?.price}
          </div>
          <div className="text-start mt-2 text-xs">{product?.description}</div>
          <div className="mt-5 w-full border border-dashed"></div>
          <div className="mt-3  flex justify-center justify-items-center">
            <div
              className="bg-['#E9C496'] text-['#E9C496'] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[10px] text-lg "
              onClick={() => decreaseQuantity(product?.id)}
            >
              -
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center text-sm font-bold">
              {checkQauantity(product?.id)}
            </div>
            <div
              className="bg-['#E9C496'] text-['#E9C496'] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[10px] text-lg "
              onClick={() => increaseQuantity(product?.id)}
            >
              +
            </div>
          </div>
          <button
            className={`
            mt-3 w-full rounded-[14px]  py-5 text-center text-sm font-bold text-white ${
              checkItemInCart(product?.id)
                ? "cursor-not-allowed bg-red-500"
                : "bg-[#944E6C]"
            }`}
            disabled={checkItemInCart(product?.id)}
            onClick={() => addToCart(product?.id, product)}
          >
            {checkItemInCart(product?.id) ? "in Cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
