import React from "react";

function Button({ isAvailable, content }) {
  return (
    <>
      <div
        className={` flex h-6 w-11 cursor-pointer items-center justify-center rounded-tiny border text-tiny font-normal  ${
          isAvailable
            ? "border-primary-color text-primary-color "
            : "cursor-not-allowed border-inactive-text text-inactive-text"
        }`}
      >
        {content ? content : "Add"}
      </div>
    </>
  );
}

export default Button;
