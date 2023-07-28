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
    console.log(count);
    formattedStr = numStr[i] + formattedStr;
    console.log(formattedStr);
    if (count % 3 === 0 && i !== 0) {
      formattedStr = "," + formattedStr;
    }
  }

  return `$ ${formattedStr}`;
}

// export function formatPrice(price: number) {
//   return `$${price.toString()[0]},${price.toString().slice(1)}`;
// }

export const imageModules = import.meta.glob("../assets/**/*.{jpg,png}");

export function resolveImage(path: string) {
  const updatedPath = `.${path}`;
  if (imageModules[updatedPath]) {
    return imageModules[updatedPath]();
  } else {
    return null;
  }
}

// export async function resolveImage(path: string) {
//   const relativePath = `.${path}`;
//   try {
//     const image = await import(relativePath);
//     return image.default;
//   } catch (error) {
//     return error;
//   }
// }

// export async function resolveImage(relativePath: string) {
//   const image = await import(relativePath);
//   const pathParths = relativePath.split("/");
//   console.log(pathParths);
// }
