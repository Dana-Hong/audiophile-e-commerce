import RightArrow from "./icons/RightArrow";

type ButtonType = {
  onClick?: () => void;
  // onClick?: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, className, children, variant }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`flex w-fit items-center justify-center py-4 px-8 text-sm uppercase ${
        variant === "secondary"
          ? "border border-black bg-transparent text-black hover:bg-black hover:text-white"
          : variant === "tertiary"
          ? "bg-none hover:text-orange"
          : "bg-orange text-white hover:bg-activeOrange"
      } ${className}`}
    >
      {children}
      {variant === "tertiary" && <RightArrow className="ml-2" />}
    </button>
  );
}
