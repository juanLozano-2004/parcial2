import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from API
    axios.get('parcial1-d0c2gddegdgpgaey.brazilsouth-01.azurewebsites.net/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddProduct = (product) => {
    axios.post('parcial1-d0c2gddegdgpgaey.brazilsouth-01.azurewebsites.net/products', product)
      .then(response => {
        setProducts([...products, response.data]);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    axios.put(`parcial1-d0c2gddegdgpgaey.brazilsouth-01.azurewebsites.net/products/${id}`, updatedProduct)
      .then(response => {
        const updatedProducts = products.map(product => 
          product.id === id ? response.data : product
        );
        setProducts(updatedProducts);
        setSelectedProduct(null);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`parcial1-d0c2gddegdgpgaey.brazilsouth-01.azurewebsites.net/products/${id}`)
      .then(() => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="App">
      <h1>Resgister</h1>
      <AddProduct onAddProduct={handleAddProduct} />
      <ProductList 
        products={products} 
        onDeleteProduct={handleDeleteProduct} 
        onEditProduct={(product) => setSelectedProduct(product)} 
      />
      {selectedProduct && (
        <UpdateProduct 
          product={selectedProduct} 
          onUpdateProduct={handleUpdateProduct} 
        />
      )}
    </div>
  );
}

export default App;
