import ProductCard from "./ProductCard";

const data = [
  { id: 0, img: "product__1.webp", name: "Dried Mango", price: "$500" },
  { id: 0, img: "product__2.webp", name: "Crunchy Crisp", price: "$300" },
  { id: 0, img: "product__3.webp", name: "Jewel Canberries", price: "$200" },
  { id: 0, img: "product__4.webp", name: "Almond Organic", price: "$100" },
];

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="1g: flex justify-between items-center">
        <div>
          <h3 className="font-medium text-3xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2 text-2xl">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>
        <div className="space-x-4 mt-8 1g:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 mt-2 text-2xl hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 mt-2 text-2xl hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/feature__1.webp"
            alt="banner"
          />
        </div>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
