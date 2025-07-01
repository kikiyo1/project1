import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContentContext';

const SecurePayment = () => {
  const { content } = useSiteContent();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center bg-green-100 text-green-700 rounded-full p-3 mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Pembayaran Aman & Terpercaya</h3>
          <p className="text-xl text-gray-600 mb-2">
            Kami terintegrasi dengan <span className="font-semibold text-blue-600">mayar.id</span> untuk memastikan setiap transaksi Anda aman dan lancar.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Menerima pembayaran dari semua Bank dan E-Wallet terkemuka di Indonesia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform -rotate-1"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
              {content.paymentLogos.map((method) => (
                <div key={method.id} className="flex justify-center">
                  <img  className="h-8 md:h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt={method.name} src={method.logo} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurePayment;