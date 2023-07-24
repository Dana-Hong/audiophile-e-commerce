import Paragraph from "./components/Paragraph";

const ProductPreview = (props: {
  name: string;
  new: boolean;
  text: string;
  imageFirst: boolean;
  smImage: string;
  mdImage: string;
  lgImage: string;
}) => {
  return (
    <section className="mx-auto flex w-[87%] max-w-[1110px] flex-col items-center gap-8 lg:flex-row">
      <div className="flex justify-center lg:w-1/2 lg:justify-end">
        <div className="flex max-w-[445px] flex-col items-center gap-6 lg:items-start lg:gap-4">
          <h1 className="w-min text-center text-[1.75rem] font-bold uppercase leading-10 tracking-[1px] lg:text-left">
            {props.name}
          </h1>
          {props.new && (
            <h2 className="order-first text-[14px] uppercase tracking-[10px] text-[#D87D4A]">
              New Product
            </h2>
          )}
          <Paragraph
            text={props.text}
            colour="black"
            additional="lg:text-left lg:py-4"
          />
          <button className="w-[160px] max-w-[160px] bg-orange py-4 text-center text-[13px] font-bold uppercase tracking-[1px] text-white lg:mt-6">
            See product
          </button>
        </div>
      </div>
      <picture className={`${props.imageFirst ? "order-first" : ""} lg:w-1/2`}>
        <source
          media="(min-width: 1024px)"
          srcSet={props.lgImage}
          sizes=""
          className="rounded-lg"
        />
        <source
          media="(min-width: 768px)"
          srcSet={props.mdImage}
          sizes=""
          className="rounded-lg"
        />
        <img src={props.smImage} alt="" className="rounded-lg" />
      </picture>
    </section>
  );
};

export default ProductPreview;
