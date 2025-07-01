import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SecurePayment from '@/components/sections/SecurePayment';
import ProductDetails from '@/components/sections/ProductDetails';
import { useSiteContent } from '@/context/SiteContentContext';

function HomePage() {
  const { content } = useSiteContent();

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Premium",
      description: "Rak berkualitas tinggi dengan material terbaik"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pelayanan Terbaik",
      description: "Tim profesional siap membantu kebutuhan Anda"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Harga Kompetitif",
      description: "Dapatkan harga terbaik untuk produk berkualitas"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">META HADESOLUTION</h1>
                <p className="text-sm text-gray-600">Rak Minimarket Berkualitas</p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link to="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Katalog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: content.hero.title }}>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                {content.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link to="/catalog">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Lihat Katalog
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  alt="Rak minimarket modern" className="w-full h-auto rounded-2xl shadow-2xl" src={content.hero.image} />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">1000+ Pelanggan Puas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Memilih Kami?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan produk dan layanan terbaik untuk kesuksesan bisnis Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductDetails />

      <SecurePayment />

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Jangan tunggu lagi! Dapatkan rak minimarket berkualitas dan mulai transformasi toko Anda hari ini.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/catalog">
                Mulai Belanja Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">META HADESOLUTION</span>
              </div>
              <p className="text-gray-400">
                Penyedia rak minimarket berkualitas tinggi untuk kesuksesan bisnis Anda.
              </p>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Produk</span>
              <ul className="space-y-2 text-gray-400">
                <li>Rak Gondola</li>
                <li>Rak Dinding</li>
                <li>Rak Buah</li>
                <li>Aksesoris Rak</li>
              </ul>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Layanan</span>
              <ul className="space-y-2 text-gray-400">
                <li>Konsultasi Gratis</li>
                <li>Pemasangan</li>
                <li>Garansi Produk</li>
                <li>After Sales</li>
              </ul>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Kontak</span>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@metahadesolution.com</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>WhatsApp: 0812-3456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 META HADESOLUTION. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;