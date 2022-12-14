import type { Category } from "../types";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const CategoryPreview = (props: {
      image: string;
      text: Category;
      height?: string;
      additional?: string;
}) => {
      return (
            <div className={`flex flex-col gap-4 text-center font-bold ${props.additional}`}>
                  <span className="text-[15px] tracking-[1px]">{props.text}</span>
                  <div className="flex items-center justify-center gap-[14px]">
                        <span className="text-[13px] tracking-[1px] opacity-50">Shop</span>
                        <img
                              src={arrow}
                              alt=""
                        />
                  </div>
                  <img
                        src={props.image}
                        alt=""
                        className={`order-first ${props.height}`}
                  />
            </div>
      );
};

export default CategoryPreview;
