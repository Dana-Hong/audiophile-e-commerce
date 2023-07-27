import { twMerge } from "tailwind-merge";

type ButtonType = {
  onClick?: () => void;
  variant?: "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, className, children, variant }: ButtonType) {
  function generateVariantStyles(variant: "secondary" | "tertiary" | undefined) {
    switch (variant) {
      case "secondary": {
        return "border border-black bg-transparent text-black hover:bg-black hover:text-white";
      }

      case "tertiary": {
        return "hover:text-orange";
      }

      default: {
        return "bg-orange text-white hover:bg-activeOrange";
      }
    }
  }

  const styles = generateVariantStyles(variant);

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex w-fit items-center justify-center py-4 px-8 text-sm font-bold uppercase tracking-[1px]",
        styles,
        className
      )}
    >
      {children}
    </button>
  );
}
