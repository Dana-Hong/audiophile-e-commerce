type LinkProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "secondary" | "tertiary";
  path: string;
};

export default function Link({ children, className, variant, path }: LinkProps) {
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
