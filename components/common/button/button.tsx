import React from "react";
import {BsArrowRightShort} from "react-icons/bs"
const Button = ({
  color,
  link = "/",
  text = "Join Us Today",
}: {
  color: "b" | "w";
  link?: string;
  text?: string;
}) => {
  return (
    <a
      href={link}
      className={`border-[0.5px] relative flex flex-nowrap items-center gap-3 self-center text-[18px] p-2 px-3 after:top-0 after:left-0 after:h-full after:w-0 hover:after:w-full after:duration-150 after:transition-all  after:absolute ${
        color === "w"
          ? "text-white border-white after:bg-white/10"
          : "text-black border-black after:bg-black/10"
      }`}
    >
      {text}{" "}
      <span className="text-3xl">
        {" "}
        <BsArrowRightShort />
      </span>
    </a>
  );
};

export default Button;
