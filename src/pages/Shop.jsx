import NewsLetter from "../components/newsletter/NewsLetter";
import Products from "../components/products/Products";
import ShopBanner from "../components/shop-banner/ShopBanner";

function Shop() {
  return (
    <main className="overflow-hidden">
      <ShopBanner />
      <Products />
      <NewsLetter />
    </main>
  )
}

export default Shop;