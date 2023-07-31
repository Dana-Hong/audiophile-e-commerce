import { useState, useContext } from "react";
import useCartContext from "../hooks/useCartContext";
import { CheckoutContext } from "../context/CheckoutContext";
import { Link, useLoaderData } from "react-router-dom";
import InfoSection from "../components/Info-Section";
import Button from "../components/ui/Button";
import Numbers from "../components/ui/inputs/Numbers";
import Categories from "../components/Categories";

import { formatPrice, getProductCategory, getProductData } from "../utils/utils";

type LoaderProps = {
  params: {
    [key: string]: string;
  };
};

export function loader({ params }: LoaderProps) {
  const productName = params.product;
  const product = getProductData(productName);
  return product;
}

export default function Product() {
  const checkoutContext = useContext(CheckoutContext);
  const { cartModal } = useCartContext();
  const { checkout, setCheckout } = checkoutContext;
  const [number, setNumber] = useState<number>(1);

  const {
    new: isNew,
    name,
    shortname,
    category,
    description,
    price,
    features,
    image,
    includes,
    gallery,
    others,
  } = useLoaderData() as ReturnType<typeof loader>;

  const { mobile, tablet, desktop } = image;
  const { first, second, third } = gallery;

  const formattedPrice = formatPrice(price);

  const featureParagraphs = features
    .split("\n")
    .filter((p) => p !== "")
    .map((p) => <p key={p}>{p}</p>);

  const accessoryList = includes.map((accesory) => {
    const { quantity, item } = accesory;
    return (
      <li key={item} className="flex gap-6">
        <div className="w-5 font-bold text-orange">{quantity}x</div>
        <div className="opacity-50">{item}</div>
      </li>
    );
  });

  const recommendList = others.map((recProduct) => {
    const { mobile, tablet, desktop } = recProduct.image;
    const productCategory = getProductCategory(recProduct.slug);
    return (
      <div key={recProduct.name} className="flex flex-col items-center gap-8">
        <p className="text-2xl font-bold uppercase">{recProduct.name}</p>
        <Button link path={`../${productCategory}/${recProduct.slug}`}>
          See Product
        </Button>
        <picture className="order-first flex max-w-[1150px] min-[1110px]:px-0">
          <source srcSet={desktop} media="(min-width: 1110px)" />
          <source srcSet={tablet} media="(min-width: 768px)" />
          <img src={mobile} alt="" className="rounded-lg" />
        </picture>
      </div>
    );
  });

  function handleAddToCart() {
    const image = mobile;
    const itemExists = checkout.filter((item) => item.shortname === shortname);
    console.log("item", itemExists);
    if (itemExists.length !== 0) {
      setCheckout((c) =>
        c.map((item) =>
          item.shortname === shortname ? { ...item, quantity: item.quantity + number } : item
        )
      );
      return;
    }
    setCheckout((c) => [...c, { name, shortname, image, price, quantity: number }]);
  }

  return (
    <main className={`${cartModal ? "pt-[85px]" : ""}`}>
      <Link
        to={`../${category}`}
        className="mx-auto mb-14 block max-w-[1150px] px-6 pt-20 text-[15px] font-medium text-opacity-50 hover:text-orange md:px-10 min-[1150px]:px-0"
      >
        Go Back
      </Link>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center gap-8 px-6 md:flex-row md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0">
        <div className="flex flex-col items-center gap-6 text-center md:gap-4 min-[1110px]:basis-1/2 min-[1110px]:items-start min-[1110px]:text-left">
          {isNew && <h3 className="text-sm uppercase text-orange">New Product</h3>}
          <h2 className="max-w-xs text-3xl font-bold uppercase md:pb-4">{name}</h2>
          <p className="w-full max-w-xl text-[15px] opacity-50 md:pb-4">{description}</p>
          <p className="text-lg font-bold uppercase tracking-[1.3px]">{formattedPrice}</p>
          <div className="flex gap-4">
            <Numbers number={number} setNumber={setNumber} />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>

        <picture className="order-first">
          <source media="(min-width: 1110px)" src={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <img src={mobile} className="rounded-md" alt={name} />
        </picture>
      </section>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center gap-8 px-6 md:flex-row md:gap-20 md:px-10 min-[1110px]:items-start min-[1150px]:gap-32 min-[1150px]:px-0">
        <div className="flex flex-col gap-6 md:basis-[60%]">
          <h2 className="text-2xl font-bold uppercase">Features</h2>
          <div className="flex flex-col gap-6 opacity-50 md:max-w-3xl">{featureParagraphs}</div>
        </div>
        <div className="flex flex-col gap-6 md:basis-[40%]">
          <h2 className="text-2xl font-bold uppercase">In the box</h2>
          <ul className="flex flex-col gap-2">{accessoryList}</ul>
        </div>
      </section>
      <section className="mx-auto mb-[90px] flex max-w-[1150px] flex-col items-center justify-center gap-6 px-6 md:flex-row md:px-10 min-[1150px]:px-0">
        <div className="flex flex-col gap-6">
          <picture>
            <source srcSet={first.desktop} media="(min-width: 1110px)" />
            <source srcSet={first.tablet} media="(min-width: 768px)" />
            <img src={first.mobile} alt="test" className="rounded-lg" />
          </picture>
          <picture>
            <source srcSet={second.desktop} media="(min-width: 1110px)" />
            <source srcSet={second.tablet} media="(min-width: 768px)" />
            <img src={second.mobile} alt="" className="rounded-lg" />
          </picture>
        </div>
        <picture>
          <source srcSet={third.desktop} media="(min-width: 1110px)" />
          <source srcSet={third.tablet} media="(min-width: 768px)" />
          <img src={third.mobile} alt="" className="rounded-lg" />
        </picture>
      </section>
      <section className="mx-auto mb-40 max-w-[1150px] px-6 md:flex-row md:px-10 min-[1150px]:px-0">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase md:mb-14 min-[1110px]:mb-16">
          You may also like
        </h2>
        <div className="flex flex-col items-center gap-14 md:flex-row md:gap-3 min-[1110px]:gap-8">
          {recommendList}
        </div>
      </section>
      <Categories />
      <InfoSection />
    </main>
  );
}
