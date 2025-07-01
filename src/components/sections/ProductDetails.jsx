import React from 'react';
import { motion } from 'framer-motion';
import { Package, Ruler, Paintbrush2, ShieldCheck } from 'lucide-react';

const details = [
  {
    icon: <Package className="w-10 h-10" />,
    title: "Material Kuat",
    description: "Menggunakan besi holo tebal 1.2mm - 2mm, menjamin kekuatan dan daya tahan rak."
  },
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Ukuran Presisi",
    description: "Dibuat dengan mesin modern untuk ukuran yang presisi dan pemasangan yang mudah."
  },
  {
    icon: <Paintbrush2 className="w-10 h-10" />,
    title: "Finishing Halus",
    description: "Finishing dengan cat powder coating, tahan gores, anti karat, dan mudah dibersihkan."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Garansi Kualitas",
    description: "Kami memberikan garansi untuk setiap produk sebagai jaminan kualitas terbaik."
  }
];

const ProductDetails = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Detail Produk Unggulan Kami</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setiap rak yang kami produksi melewati proses kontrol kualitas yang ketat untuk hasil terbaik.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {detail.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">{detail.title}</h4>
              <p className="text-gray-600 leading-relaxed">{detail.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;