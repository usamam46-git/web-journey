import React, { useState } from "react";
import Products from "./utils/Products.js";
import ProductCard from "./components/ProductCard.jsx";
import NoDistractionSearchField from "./components/Input.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = Products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <NoDistractionSearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, img, name, price, category }) => (
            <ProductCard
              key={id}
              img={img}
              name={name}
              category={category}
              price={price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </>
  );
};

export default App;


