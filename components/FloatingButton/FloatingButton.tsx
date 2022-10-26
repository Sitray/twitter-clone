interface FloatingButtonProps {
  children: JSX.Element | JSX.Element[];
}

export default function FloatingButton({ children }: FloatingButtonProps) {
  return (
    <>
      <button className="rounded-full bg-primary w-14 h-14 text-center">
        {children}
      </button>
    </>
  );
}
