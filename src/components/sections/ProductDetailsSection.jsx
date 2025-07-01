import React from 'react';
import { motion } from 'framer-motion';
import { useSiteContent } from '@/context/SiteContentContext';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductDetailsSection = () => {
  const { content } = useSiteContent();
  const { toast } = useToast();
  const { title, subtitle, packages } = content.productDetails || { title: '', subtitle: '', packages: [] };

  const handleSelectPackage = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan!",
      description: "Anda bisa meminta fungsionalitas ini di prompt berikutnya! 🚀",
    });
  };

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 flex flex-col border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex-grow">
                <div className={`inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4 ${pkg.badgeColor}`}>
                  {pkg.badge}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">Rp {pkg.price}</span>
                  <div className="text-gray-500">
                    <span className="line-through">Rp {pkg.originalPrice}</span>
                    <span className="ml-2 text-green-400 font-semibold">Hemat {pkg.saving}!</span>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={handleSelectPackage}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base"
              >
                Pilih Paket
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;