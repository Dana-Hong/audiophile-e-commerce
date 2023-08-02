import data from "../data.json";

export function getCategoryData(categoryName: string) {
  const category = data
    .filter((item) => item.category === categoryName)
    .sort((a, b) => {
      if (a.new && !b.new) {
        return -1;
      } else if (b.new && !a.new) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });
  return category;
}

export function getProductCategory(productSlug: string) {
  const product = data.filter((item) => item.slug === productSlug)[0];
  return product.category;
}

export function getProductData(productName: string) {
  const product = data.filter((item) => item.slug === productName)[0];
  return product;
}

export function formatPrice(price: number) {
  const numStr = price.toString();
  let formattedStr = "";
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    count++;
    formattedStr = numStr[i] + formattedStr;
    if (count % 3 === 0 && i !== 0) {
      formattedStr = "," + formattedStr;
    }
  }

  return `$ ${formattedStr}`;
}

export const imageModules = import.meta.glob("../assets/**/*.{jpg,png}");

export function resolveImage(path: string) {
  const updatedPath = `.${path}`;
  if (imageModules[updatedPath]) {
    return imageModules[updatedPath]();
  } else {
    return null;
  }
}
