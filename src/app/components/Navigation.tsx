import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../imports/image.png';
import { motion } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Empower21 Logo" className="h-10" />
            <div className="text-xl font-semibold text-amber-400">
              EMPOWER21
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-amber-400 transition">
              Home
            </a>
            <a href="#private-banking" className="text-gray-300 hover:text-amber-400 transition">
              Private Banking
            </a>
            <a href="#career-hub" className="text-gray-300 hover:text-amber-400 transition">
              Career Hub
            </a>
            <a href="#job-assurance" className="text-gray-300 hover:text-amber-400 transition">
              Job Assurance
            </a>
            <a href="#about" className="text-gray-300 hover:text-amber-400 transition">
              About Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden border-t border-slate-800 bg-slate-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-300 hover:text-amber-400">
              Home
            </a>
            <a href="#private-banking" className="block text-gray-300 hover:text-amber-400">
              Private Banking
            </a>
            <a href="#career-hub" className="block text-gray-300 hover:text-amber-400">
              Career Hub
            </a>
            <a href="#job-assurance" className="block text-gray-300 hover:text-amber-400">
              Job Assurance
            </a>
            <a href="#about" className="block text-gray-300 hover:text-amber-400">
              About Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
