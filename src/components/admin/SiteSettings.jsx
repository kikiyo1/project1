import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSiteContent } from '@/context/SiteContentContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save, Plus, Trash2, Upload } from 'lucide-react';

const SiteSettings = () => {
  const { content, updateContent } = useSiteContent();
  const [heroContent, setHeroContent] = useState(content.hero);
  const [paymentLogos, setPaymentLogos] = useState(content.paymentLogos);
  const { toast } = useToast();

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroContent(prev => ({ ...prev, [name]: value }));
  };

  const handleHeroImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroContent(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (id, field, value) => {
    setPaymentLogos(logos => logos.map(logo => logo.id === id ? { ...logo, [field]: value } : logo));
  };

  const handleLogoImageUpload = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleLogoChange(id, 'logo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addLogo = () => {
    setPaymentLogos(logos => [...logos, { id: uuidv4(), name: 'Nama Baru', logo: '' }]);
  };

  const removeLogo = (id) => {
    setPaymentLogos(logos => logos.filter(logo => logo.id !== id));
  };

  const handleSave = () => {
    updateContent({ hero: heroContent, paymentLogos });
    toast({
      title: 'Berhasil!',
      description: 'Pengaturan situs telah disimpan.',
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Pengaturan Halaman Utama</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="heroTitle">Judul Hero (mendukung HTML)</Label>
            <Textarea id="heroTitle" name="title" value={heroContent.title} onChange={handleHeroChange} rows={3} />
          </div>
          <div>
            <Label htmlFor="heroDescription">Deskripsi Hero</Label>
            <Textarea id="heroDescription" name="description" value={heroContent.description} onChange={handleHeroChange} rows={3} />
          </div>
          <div>
            <Label htmlFor="heroImage">Gambar Hero</Label>
            <div className="flex items-center gap-4">
              <Input id="heroImage" type="file" accept="image/*" onChange={handleHeroImageUpload} className="flex-1" />
              {heroContent.image && <img src={heroContent.image} alt="Hero Preview" className="w-32 h-20 object-cover rounded-md border" />}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Pengaturan Logo Pembayaran</h3>
          <Button onClick={addLogo} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Logo
          </Button>
        </div>
        <div className="space-y-4">
          {paymentLogos.map((logo, index) => (
            <div key={logo.id} className="flex items-center gap-4 p-3 border rounded-lg">
              <span className="text-gray-500">{index + 1}</span>
              <div className="flex-1">
                <Label>Nama</Label>
                <Input value={logo.name} onChange={(e) => handleLogoChange(logo.id, 'name', e.target.value)} />
              </div>
              <div className="flex-1">
                <Label>File Logo</Label>
                <Input type="file" accept="image/*" onChange={(e) => handleLogoImageUpload(logo.id, e)} />
              </div>
              <img src={logo.logo} alt={logo.name} className="w-16 h-10 object-contain rounded-md border" />
              <Button variant="destructive" size="icon" onClick={() => removeLogo(logo.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Save className="w-4 h-4 mr-2" />
          Simpan Semua Perubahan
        </Button>
      </div>
    </div>
  );
};

export default SiteSettings;