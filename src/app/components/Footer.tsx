import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-amber-400 mb-3">
              EMPOWER21
            </h3>
            <p className="text-amber-500 mb-6 text-lg">
              Building Tomorrow's Leaders.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals with exclusive wealth management services and guaranteed career placement opportunities. Your success is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition">
                  Corporate Partnerships
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-amber-400" />
                <a href="mailto:contact@empower.com" className="hover:text-white transition">
                  contact@empower.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-amber-400" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-8900
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2026 Empower21. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
