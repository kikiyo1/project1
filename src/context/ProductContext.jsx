import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const defaultProducts = [
  {
    id: 1,
    name: 'Rak Gondola Premium Single',
    price: 2500000,
    category: 'gondola',
    image: 'Premium single-sided gondola shelving unit for supermarket',
    description: 'Rak gondola satu sisi premium, material kokoh, finishing cat powder coating.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/rak-gondola-premium'
  },
  {
    id: 2,
    name: 'Rak Dinding Ekonomis',
    price: 1200000,
    category: 'dinding',
    image: 'Economical wall-mounted shelving system for retail store',
    description: 'Rak dinding hemat ruang dengan desain modern dan fungsional.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/rak-dinding-ekonomis'
  },
  {
    id: 3,
    name: 'Rak Buah & Sayur',
    price: 1800000,
    category: 'buah',
    image: 'Fresh fruit and vegetable display rack with multiple tiers',
    description: 'Rak display buah dan sayur dengan keranjang dan ventilasi optimal.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/rak-buah-sayur'
  },
  {
    id: 4,
    name: 'Meja Kasir Modern',
    price: 3500000,
    category: 'kasir',
    image: 'Modern cashier counter with shelving',
    description: 'Meja kasir dengan desain minimalis, dilengkapi laci dan rak display.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/meja-kasir-modern'
  },
  {
    id: 5,
    name: 'Rak Gondola Double-Sided',
    price: 4500000,
    category: 'gondola',
    image: 'Double-sided gondola shelving unit for center aisle of store',
    description: 'Rak gondola dua sisi, ideal untuk lorong tengah toko, kapasitas besar.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/rak-gondola-double'
  },
  {
    id: 6,
    name: 'Hook Display Gantungan',
    price: 15000,
    category: 'aksesoris',
    image: 'Metal display hooks for pegboard shelving',
    description: 'Gantungan hook chrome untuk display aksesoris di rak.',
    checkoutUrl: 'https://mayar.id/meta-hadesolution/hook-display'
  },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        setProducts(defaultProducts);
        localStorage.setItem('products', JSON.stringify(defaultProducts));
      }
    } catch (error) {
      console.error("Failed to parse products from localStorage", error);
      setProducts(defaultProducts);
    }
  }, []);

  const updateLocalStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addProduct = (productData) => {
    if (!productData.name || !productData.price || !productData.description || !productData.checkoutUrl) {
      throw new Error("Mohon lengkapi semua field yang diperlukan.");
    }
    const newProduct = {
      id: Date.now(),
      ...productData,
      price: parseInt(productData.price, 10)
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const updateProduct = (id, productData) => {
     if (!productData.name || !productData.price || !productData.description || !productData.checkoutUrl) {
      throw new Error("Mohon lengkapi semua field yang diperlukan.");
    }
    const updatedProducts = products.map(p =>
      p.id === id ? { ...p, ...productData, price: parseInt(productData.price, 10) } : p
    );
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};