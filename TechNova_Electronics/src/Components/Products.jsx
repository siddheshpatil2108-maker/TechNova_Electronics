import React from "react";

function Products() {
  const products = [
    {
      name: "iPhone 15",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      price: "₹79,999",
    },
    {
      name: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      price: "₹89,999",
    },
    {
      name: "Smart TV",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
      price: "₹45,999",
    },
    {
      name: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      price: "₹2,999",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;