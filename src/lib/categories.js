import { categoryList } from '../config/categories';
import { products } from './catalog';

/* The categories to show, in your order from src/config/categories.js.
   `soon` is true while a category has no products. Any product category that is not
   in the list is added at the end, so nothing is ever hidden by mistake. */
const listed = categoryList.map((c) => c.name);
const extra = [...new Set(products.map((p) => p.category))].filter((n) => !listed.includes(n));

export const shopCategories = [...categoryList, ...extra.map((name) => ({ name }))].map((c) => {
  const count = products.filter((p) => p.category === c.name).length;
  return { ...c, count, soon: count === 0 };
});

export const liveCategories = shopCategories.filter((c) => !c.soon);
export const findCategory = (name) => shopCategories.find((c) => c.name === name);
