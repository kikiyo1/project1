import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import AdminDashboard from '@/pages/AdminDashboard';
import ProductCatalog from '@/pages/ProductCatalog';
import LoginPage from '@/pages/LoginPage';
import ContactPage from '@/pages/ContactPage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { ProductProvider } from '@/context/ProductContext';
import { SiteContentProvider } from '@/context/SiteContentContext';

function App() {
  return (
    <>
      <Helmet>
        <title>METARAK HADESOLUTION - Rak Minimarket Berkualitas</title>
        <meta name="description" content="Toko online terpercaya untuk rak minimarket berkualitas tinggi. META HADESOLUTION menyediakan berbagai jenis rak dengan harga terbaik." />
      </Helmet>
      <SiteContentProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </ProductProvider>
      </SiteContentProvider>
    </>
  );
}

export default App;
