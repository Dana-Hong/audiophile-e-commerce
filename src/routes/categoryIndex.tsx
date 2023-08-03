import useModalContext from "../hooks/useModalContext";
import CategoryFeaturedProduct from "../components/categoryFeaturedProduct";
import { useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import InfoSection from "../components/Info-Section";
import { getCategoryData } from "../utils/utils";

type LoaderProps = {
  params: {
    [key: string]: string;
  };
};

export function loader({ params }: LoaderProps) {
  const { category } = params;
  return getCategoryData(category);
}

export default function CategoryIndex() {
  const { modal } = useModalContext();
  const categoryData = useLoaderData() as ReturnType<typeof loader>;
  const categoryName = categoryData[0].category;
  const productsList = categoryData.map((product, i: number) => (
    <CategoryFeaturedProduct
      key={product.name}
      {...product}
      orderFirst={i % 2 === 0 ? true : false}
    />
  ));

  return (
    <main className={`${modal.cart || modal.orderConfirm ? "pt-[85px]" : ""}`}>
      <h1 className="mx-auto w-full max-w-[1440px] bg-almostBlack py-8 text-center text-[40px] font-bold uppercase leading-[44px] tracking-normal text-white">
        {categoryName}
      </h1>
      {productsList}
      <Categories />
      <InfoSection />
    </main>
  );
}
