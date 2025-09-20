// app/products/page.tsx
import ProductCard from "@/components/Product/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Silver-Toned Drop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png", // replace with real
    },
    {
      id: 2,
      title: "Cuban Link Bracelet",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
    {
      id: 3,
      title: "Hoop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
     {
      id: 4,
      title: "Silver-Toned Drop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png", // replace with real
    },
    {
      id: 5,
      title: "Cuban Link Bracelet",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
    {
      id: 6,
      title: "Hoop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
     {
      id: 7,
      title: "Silver-Toned Drop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png", // replace with real
    },
    {
      id: 8,
      title: "Cuban Link Bracelet",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
    {
      id: 9,
      title: "Hoop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
     {
      id: 10,
      title: "Silver-Toned Drop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png", // replace with real
    },
    {
      id: 11,
      title: "Cuban Link Bracelet",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
    {
      id: 12,
      title: "Hoop Earrings",
      price: "Rs. 2200",
      material: "925 Silver",
      image: "/earRing.png",
    },
  ];

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 mt-26 bg-white">
        <h1 className="text-xl text-black p-8">ALL Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
    </div>
  );
}
