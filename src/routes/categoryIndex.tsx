import { Outlet } from "react-router-dom";
import CategoryFeaturedProduct from "../components/categoryFeaturedProduct";
import { useLoaderData, useParams } from "react-router-dom";
import Categories from "../components/Categories";
import InfoSection from "../components/Info-Section";
import { getCategoryData } from "../utils/utils";

type LoaderProps = {
  params: {
    [key: string]: string;
  };
};

export function loader({ params }: LoaderProps) {
  console.log("params", params);
  const { category } = params;
  return getCategoryData(category);
  // console.log("CATEGORY")
  // return { category };
}

// type ProductCategoryType = {
//   category: string;
// };

export default function CategoryIndex() {
  // const { category } = useParams();
  const categoryData = useLoaderData() as ReturnType<typeof loader>;
  // console.log(category);
  // const categoryData = getCategoryData(category as string);
  const categoryName = categoryData[0].category;
  const productsList = categoryData.map((product, i: number) => (
    <CategoryFeaturedProduct
      key={product.name}
      {...product}
      orderFirst={i % 2 === 0 ? true : false}
    />
  ));

  return (
    <main>
      <h1 className="mx-auto w-full max-w-[1440px] bg-almostBlack py-8 text-center text-[40px] font-bold uppercase leading-[44px] tracking-normal text-white">
        {categoryName}
      </h1>
      {productsList}
      <Categories />
      <InfoSection />
    </main>
  );
}
