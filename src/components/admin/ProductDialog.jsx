import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save, Upload } from 'lucide-react';

const ProductDialog = ({ isOpen, onClose, onSave, product }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: 'gondola',
    image: '',
    description: '',
    checkoutUrl: ''
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (product) {
      setProductData({
        ...product,
        price: product.price.toString()
      });
      setImagePreview(product.image);
    } else {
      setProductData({
        name: '', price: '', category: 'gondola', image: '', description: '', checkoutUrl: ''
      });
      setImagePreview('');
    }
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProductData(prev => ({ ...prev, image: base64String }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    { id: 'gondola', name: 'Rak Gondola' },
    { id: 'dinding', name: 'Rak Dinding' },
    { id: 'buah', name: 'Rak Buah' },
    { id: 'kasir', name: 'Meja Kasir' },
    { id: 'aksesoris', name: 'Aksesoris' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product ? 'Edit Produk' : 'Tambah Produk Baru'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nama Produk</Label>
              <Input id="name" name="name" value={productData.name} onChange={handleChange} placeholder="Masukkan nama produk" />
            </div>
            <div>
              <Label htmlFor="price">Harga (IDR)</Label>
              <Input id="price" name="price" type="number" value={productData.price} onChange={handleChange} placeholder="Masukkan harga" />
            </div>
          </div>
          <div>
            <Label htmlFor="category">Kategori</Label>
            <select id="category" name="category" value={productData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="image-upload">Gambar Produk</Label>
            <div className="flex items-center gap-4">
              <Input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="flex-1" />
              {imagePreview && <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-md border" />}
            </div>
          </div>
          <div>
            <Label htmlFor="description">Deskripsi Produk</Label>
            <Textarea id="description" name="description" value={productData.description} onChange={handleChange} placeholder="Masukkan deskripsi produk" rows={3} />
          </div>
           <div>
            <Label htmlFor="checkoutUrl">URL Checkout (mayar.id)</Label>
            <Input id="checkoutUrl" name="checkoutUrl" value={productData.checkoutUrl} onChange={handleChange} placeholder="https://mayar.id/user/produk" />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={onClose}>Batal</Button>
            <Button onClick={() => onSave(productData)}>
              <Save className="w-4 h-4 mr-2" />
              Simpan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;