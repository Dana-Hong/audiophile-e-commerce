import { Link } from "react-router-dom";
import Button from "./ui/Button";

type ProductCategoryFeaturedProductProps = {
  new: boolean;
  name: string;
  description: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  slug: string;
  orderFirst: boolean;
};

export default function CategoryFeaturedProduct({
  new: isNew,
  name,
  description,
  image,
  slug,
  orderFirst,
}: ProductCategoryFeaturedProductProps) {
  const { mobile, tablet, desktop } = image;
  return (
    <section className="mx-auto mb-40 mt-16 w-full max-w-[1110px]">
      <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:mx-0 min-[1150px]:flex-row">
        <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
          {isNew && <h3 className="text-sm uppercase text-orange">New Product</h3>}
          <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">{name}</h2>
          <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
            {description}
          </p>
          <Button link path={`${slug}`}>
            See Product
          </Button>
        </div>
        <Link to={`./${slug}`} className={`${orderFirst ? "order-first" : ""}`}>
          <picture className={`${orderFirst ? "order-first" : ""} min-[1110px]:basis-1/2`}>
            <source media="(min-width: 1110px)" srcSet={desktop} />
            <source media="(min-width: 700px)" srcSet={tablet} />
            <img src={mobile} alt={name} className="w-full rounded-lg md:max-w-2xl" />
          </picture>
        </Link>
      </div>
    </section>
  );
}
