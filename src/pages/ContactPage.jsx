import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      description: "Pesan Anda belum terkirim. Fungsi ini sedang dalam pengembangan.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Kontak Kami - META HADESOLUTION</title>
        <meta name="description" content="Hubungi META HADESOLUTION untuk konsultasi gratis mengenai kebutuhan rak minimarket Anda. Kami siap membantu." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
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
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Kontak</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Punya pertanyaan atau butuh konsultasi? Tim kami siap membantu Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Alamat Kantor</h4>
                    <p className="text-gray-600">Jl. Industri Rak No. 123, Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                    <p className="text-gray-600">info@metahadesolution.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Telepon & WhatsApp</h4>
                    <p className="text-gray-600">(021) 1234-5678 / 0812-3456-7890</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input id="subject" placeholder="Konsultasi Rak Gondola" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Pesan Anda</Label>
                <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." rows={5} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </Button>
            </motion.form>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactPage;