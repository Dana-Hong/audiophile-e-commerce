import Button from "./Button";

type ProductPreviewType = {
  imageFirst?: true;
  name: string;
  body: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
export default function ProductPreview({
  imageFirst,
  name,
  body,
  images,
}: ProductPreviewType) {
  const { mobile, tablet, desktop } = images;

  return (
    <section className="mx-auto w-full max-w-[1110px]">
      {/* detailed product preview */}
      <div className="mx-6 flex flex-col items-center gap-14 min-[1110px]:flex-row">
        <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
          <h3 className="text-sm uppercase text-orange">New Product</h3>
          <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">
            {name}
          </h2>
          <p className="max-w-xl text-[15px] opacity-50 md:pb-4 min-[1110px]:max-w-[445px]">
            {body}
          </p>
          <Button>See Product</Button>
        </div>
        <picture
          className={`${
            imageFirst ? "order-first" : ""
          } bg-red-300 min-[1110px]:basis-1/2`}
        >
          <source media="(min-width: 1110px)" srcSet={desktop} />
          <source media="(min-width: 700px)" srcSet={tablet} />
          <img
            src={mobile}
            alt="XX99 Mark II Headphones"
            className="w-full rounded-lg md:max-w-2xl min-[1110px]:scale-75"
          />
        </picture>
      </div>
    </section>
  );
}
