/* ==========================================================================
   YOUR SHOP CATEGORIES, in the order they appear (shop filters, footer, home page).

   * To ADD a category: add a line below. The `name` must match the `category:` written in
     the product's info.js (e.g. category: 'Hoodies').
   * A category with NO products yet automatically shows a "Coming soon" popup when a
     customer opens it. The moment you add a product with that category, it becomes a normal
     category. No other change needed.
   * hi / ur are the Hindi and Urdu names (optional; English is used if left out).
   ========================================================================== */

export const categoryList = [
  { name: 'Oversized Tees', hi: 'ओवरसाइज़्ड टी', ur: 'اوورسائزڈ ٹیز' },
  { name: 'Hoodies', hi: 'हुडी', ur: 'ہوڈیز' },
  { name: 'T-Shirts', hi: 'टी-शर्ट', ur: 'ٹی شرٹس' }, // no products yet, so it shows "Coming soon"

  // More ideas (remove the // to show them):
  // { name: 'Joggers', hi: 'जॉगर्स', ur: 'جوگرز' },
  // { name: 'Caps', hi: 'कैप', ur: 'کیپس' },
  // { name: 'Accessories', hi: 'एक्सेसरीज़', ur: 'ایکسیسریز' },
];
