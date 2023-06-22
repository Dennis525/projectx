import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import data from "@/utils/data";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragragh start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Home of Best Electronic Products In Town
          </div>
          <div className="text-md md:text-xl">
            We offer online stop shop for computer accessories such as 👉
            Laptops, Desktops, MacBook, Tablets and all networking services
          </div>
        </div>
        {/* heading and paragragh end */}

        {/* {products grid start} */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
        px-5 md:px-0"
        >
          {data.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* {products grid end} */}

      </Wrapper>
    </main>
  );
}
