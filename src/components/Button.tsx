import RightArrow from "./icons/RightArrow";

type Link = {
  link: true;
  path: string;
};

type Button = {
  link: false;
  path: false;
};

type ButtonType = {
  variant?: "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
} & (Link | Button);

export default function Button({ className, children, path, link, variant }: ButtonType) {
  if (link) {
    return (
      <a
        className={`flex w-fit cursor-pointer items-center justify-center py-4 px-8 text-sm uppercase ${
          variant === "secondary"
            ? "border border-black bg-transparent text-black hover:bg-black hover:text-white"
            : variant === "tertiary"
            ? "bg-none hover:text-orange"
            : "bg-orange text-white hover:bg-activeOrange"
        } ${className}`}
        href={path}
      >
        {children}
      </a>
    );
  }

  return (
    <button
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
