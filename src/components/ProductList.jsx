import React from "react";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

const ProductList = ({ searchTerm }) => {
  const { products, loading, error } = useProducts();

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-auto" key={product.id}>
              <ProductItem
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.thumbnail}
              />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
