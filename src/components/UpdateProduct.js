import React, { useState, useEffect } from 'react';

function UpdateProduct({ product, onUpdateProduct }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = { name, price: parseFloat(price), quantity: parseInt(quantity) };
    onUpdateProduct(product.id, updatedProduct);
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
