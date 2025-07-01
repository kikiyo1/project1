import React from 'react';

const CategoryDistribution = ({ products }) => {
  const categories = [
    { id: 'gondola', name: 'Rak Gondola' },
    { id: 'dinding', name: 'Rak Dinding' },
    { id: 'buah', name: 'Rak Buah' },
    { id: 'kasir', name: 'Meja Kasir' },
    { id: 'aksesoris', name: 'Aksesoris' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Distribusi Kategori Produk</h3>
      <div className="space-y-4">
        {categories.map(category => {
          const count = products.filter(p => p.category === category.id).length;
          const percentage = products.length > 0 ? (count / products.length) * 100 : 0;
          
          return (
            <div key={category.id} className="flex items-center justify-between">
              <span className="font-medium text-gray-700 w-1/3">{category.name}</span>
              <div className="flex items-center space-x-3 w-2/3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-20 text-right font-semibold">{count} item</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDistribution;