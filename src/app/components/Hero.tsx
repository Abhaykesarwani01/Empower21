import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import heroImage from "../../imports/hero.png";

export function Hero() {
  // Avoid the upward "jump" on initial page load; only enable Y-shift after the user scrolls.
  const [enableScrollUpShift, setEnableScrollUpShift] = useState(false);
  useEffect(() => {
    const onFirstScroll = () => setEnableScrollUpShift(true);
    window.addEventListener('scroll', onFirstScroll, { once: true });
    return () => window.removeEventListener('scroll', onFirstScroll);
  }, []);

  const yHidden = enableScrollUpShift ? 30 : 0;

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: yHidden }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: yHidden }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: yHidden }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your Knowledge.<br />
              <span className="text-amber-400">Accelerate Your Career.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Exclusive private banking solutions paired with free expert career consultancy and guaranteed job placement. Build your future with confidence.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: yHidden }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <a 
                href="https://forms.gle/Ftyviqg9JophPeor6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition flex items-center justify-center gap-2 group font-semibold">
                  Upload Your Resume
                  <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                </button>
              </a>

              <button
                onClick={() => {
                  document.getElementById('career-hub')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-amber-400 border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition font-semibold"
              >
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: yHidden }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt="Professional business meeting"
              className="rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
