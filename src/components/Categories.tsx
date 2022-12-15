import CategoryPreview from "./CategoryPreview";

const Categories = () => {
      return (
            <section className="flex w-[87%] max-w-[1110px] flex-col items-center justify-evenly gap-4 pt-12 pb-[9.375rem] text-center text-[15px] font-bold uppercase md:flex-row">
                  <CategoryPreview
                        text="Headphones"
                        image="./assets/shared/desktop/image-category-thumbnail-headphones.png"
                        height="h-[104px] lg:h-[160px]"
                        additional=""
                  />
                  <CategoryPreview
                        text="Speakers"
                        image={"./assets/shared/desktop/image-category-thumbnail-speakers.png"}
                        height="h-[101px] lg:h-[160px]"
                  />
                  <CategoryPreview
                        text="Earphones"
                        image="./assets/shared/desktop/image-category-thumbnail-earphones.png"
                        height="h-[104px] lg:h-[160px]"
                  />
            </section>
      );
};

export default Categories;
