import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: string | JSX.Element[];
  onClick?: MouseEventHandler;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex flex-row content-center items-center bg-black text-white rounded-full font-extrabold py-2 px-8 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:bg-primary duration-100"
      >
        {children}
      </button>
    </>
  );
}
