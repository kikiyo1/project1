import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SiteContentContext = createContext();

export const useSiteContent = () => useContext(SiteContentContext);

const defaultContent = {
  hero: {
    title: 'Solusi Terbaik untuk<span class="block text-yellow-300">Rak Minimarket Anda</span>',
    description: 'Dapatkan rak minimarket berkualitas premium dengan desain modern dan harga terjangkau. Tingkatkan tampilan toko Anda sekarang juga!',
    image: 'https://images.unsplash.com/photo-1675825547463-0788eca2320e?q=80&w=2070&auto=format&fit=crop'
  },
  productDetails: {
    title: 'Pilih Paket Terbaik',
    subtitle: 'Solusi yang disesuaikan dengan kebutuhan dan skala bisnis Anda',
    packages: [
      {
        id: uuidv4(),
        badge: 'Paling Populer',
        badgeColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        name: 'HADES BASIC',
        description: 'Solusi kasir sempurna untuk usaha kecil dan UMKM',
        price: '299.000',
        originalPrice: '499.000',
        saving: '40%',
        features: [
          'Manajemen stok real-time',
          'Laporan penjualan harian',
          'Sistem barcode scanner',
          'Database produk unlimited',
          'Support 24/7',
        ],
      },
      {
        id: uuidv4(),
        badge: 'Terlaris',
        badgeColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
        name: 'HADES PRO',
        description: 'Fitur lengkap untuk bisnis menengah dengan analitik mendalam',
        price: '599.000',
        originalPrice: '899.000',
        saving: '40%',
        features: [
          'Semua fitur BASIC',
          'Multi-cabang management',
          'Advanced analytics & reporting',
          'Integrasi e-commerce',
          'Customer loyalty program',
          'API integration',
        ],
      },
      {
        id: uuidv4(),
        badge: 'Premium',
        badgeColor: 'bg-gradient-to-r from-red-500 to-orange-500',
        name: 'HADES ENTERPRISE',
        description: 'Solusi enterprise dengan customization penuh',
        price: '999.000',
        originalPrice: '1.499.000',
        saving: '40%',
        features: [
          'Semua fitur PRO',
          'Unlimited branches',
          'Custom dashboard',
          'Advanced user management',
          'White-label solution',
          'Dedicated support team',
          'Custom integrations',
        ],
      },
      {
        id: uuidv4(),
        badge: 'Ultimate',
        badgeColor: 'bg-gradient-to-r from-purple-600 to-violet-700',
        name: 'HADES ULTIMATE',
        description: 'Skalabilitas tanpa batas untuk korporasi besar',
        price: '1.999.000',
        originalPrice: '2.999.000',
        saving: '33%',
        features: [
            'Semua fitur ENTERPRISE',
            'Server prioritas tinggi',
            'Konsultan AI khusus',
            'Pelatihan on-site',
            'SLA 99.9% Uptime',
            'Akses fitur beta',
            'Manajer akun pribadi',
        ],
      },
    ]
  },
  paymentLogos: [
    { id: uuidv4(), name: 'BCA', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'Mandiri', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'BNI', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'BRI', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'GoPay', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'OVO', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'DANA', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
    { id: uuidv4(), name: 'ShopeePay', logo: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2070&auto=format&fit=crop' },
  ]
};

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    try {
      const savedContent = localStorage.getItem('siteContent');
      if (savedContent) {
        const parsedContent = JSON.parse(savedContent);
        if (!parsedContent.productDetails) {
          parsedContent.productDetails = defaultContent.productDetails;
        }
        setContent(parsedContent);
      } else {
        localStorage.setItem('siteContent', JSON.stringify(defaultContent));
      }
    } catch (error) {
      console.error("Failed to parse site content from localStorage", error);
      setContent(defaultContent);
    }
  }, []);

  const updateContent = (newContent) => {
    const mergedContent = { ...content, ...newContent };
    setContent(mergedContent);
    localStorage.setItem('siteContent', JSON.stringify(mergedContent));
  };

  const value = {
    content,
    updateContent,
  };

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
};