import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: string | JSX.Element[];
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className="flex flex-row content-center items-center bg-black text-white rounded-full font-extrabold py-2 px-8 enabled:transition enabled:ease-in-out enabled:delay-150 enabled:hover:translate-y-1 enabled:hover:scale-100 enabled:hover:bg-primary enabled:duration-100 disabled:opacity-20 disabled:cursor-default select-none"
      >
        {children}
      </button>
    </>
  );
}
