import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Package, BarChart2, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductList from '@/components/admin/ProductList';
import ProductStats from '@/components/admin/ProductStats';
import CategoryDistribution from '@/components/admin/CategoryDistribution';
import ProductDialog from '@/components/admin/ProductDialog';
import SiteSettings from '@/components/admin/SiteSettings';
import { useProducts } from '@/context/ProductContext';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleOpenDialog = (product = null) => {
    setEditingProduct(product);
    setDialogOpen(true);
  };

  const handleSaveProduct = (productData) => {
    try {
      if (editingProduct) {
        updateProduct(editingProduct.id, productData);
        toast({ title: 'Berhasil!', description: 'Produk berhasil diperbarui.' });
      } else {
        addProduct(productData);
        toast({ title: 'Berhasil!', description: 'Produk berhasil ditambahkan.' });
      }
      setDialogOpen(false);
      setEditingProduct(null);
    } catch (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    toast({ title: 'Berhasil!', description: 'Produk berhasil dihapus.' });
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  const stats = [
    {
      title: 'Total Produk',
      value: products.length,
      icon: <Package className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Nilai Stok',
      value: formatPrice(products.reduce((sum, p) => sum + (p.price || 0), 0)),
      icon: <Package className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Jumlah Kategori',
      value: new Set(products.map((p) => p.category)).size,
      icon: <Package className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">META HADESOLUTION</h1>
                <p className="text-sm text-gray-600">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link to="/">Lihat Situs</Link>
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">
              <Package className="w-4 h-4 mr-2" />
              Kelola Produk
            </TabsTrigger>
            <TabsTrigger value="stats">
              <BarChart2 className="w-4 h-4 mr-2" />
              Statistik
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              Pengaturan Situs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Daftar Produk</h2>
              <Button
                onClick={() => handleOpenDialog()}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Produk
              </Button>
            </div>
            <ProductList
              products={products}
              onEdit={handleOpenDialog}
              onDelete={handleDelete}
            />
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <ProductStats stats={stats} />
            <CategoryDistribution products={products} />
          </TabsContent>

          <TabsContent value="settings">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>

      <ProductDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveProduct}
        product={editingProduct}
      />
    </div>
  );
};

export default AdminDashboard;