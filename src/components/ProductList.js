import React from 'react';

function ProductList({ products, onDeleteProduct, onEditProduct }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - ${product.price} - Quantity: {product.quantity}</span>
            <button onClick={() => onEditProduct(product)}>Edit</button>
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
