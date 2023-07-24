import Button from "./Button";
import type { Category } from "../types";

type CategoyPreviewProps = {
  image: string;
  text: Category;
  height?: string;
  additional?: string;
};

export default function CategoryPreview({
  image,
  text,
  height,
  additional,
}: CategoyPreviewProps) {
  return (
    <div
      className={`flex flex-col gap-4 text-center font-bold ${additional} w-full bg-red-300`}
    >
      <div></div>
      <span className="text-[15px] tracking-[1px]">{text}</span>
      <div className="flex items-center justify-center gap-[14px]">
        <Button variant="tertiary">
          <span className="tracking-[1px] opacity-50">Shop</span>
        </Button>
      </div>
      <img src={image} alt="" className={`order-first`} />
    </div>
  );
}
