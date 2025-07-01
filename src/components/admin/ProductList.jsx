import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductList = ({ products, onEdit, onDelete }) => {
  const categories = {
    gondola: 'Rak Gondola',
    dinding: 'Rak Dinding',
    buah: 'Rak Buah',
    kasir: 'Meja Kasir',
    aksesoris: 'Aksesoris'
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Produk</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Kategori</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Harga</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">URL Checkout</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 items-center justify-center">
                       <img  alt={product.name} className="w-full h-full object-cover rounded-lg" src={product.image} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {categories[product.category] || 'Lainnya'}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {formatPrice(product.price)}
                </td>
                 <td className="px-6 py-4 text-sm text-gray-500">
                  <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 truncate block max-w-xs">{product.checkoutUrl}</a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => onEdit(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onDelete(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 text-gray-300 mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v2"/><path d="M21 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="3 10 12 15 21 10"/><line x1="12" y1="22" x2="12" y2="15"/></svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Belum Ada Produk</h3>
          <p className="text-gray-500">Tambahkan produk pertama Anda untuk memulai.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;