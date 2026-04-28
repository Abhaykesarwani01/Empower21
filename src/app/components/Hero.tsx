import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your Wealth.<br />
              <span className="text-amber-400">Accelerate Your Career.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Exclusive private banking solutions paired with free expert career consultancy and guaranteed job placement. Build your future with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition flex items-center justify-center gap-2 group font-semibold">
                Upload Your Resume
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
              <button className="px-8 py-4 bg-transparent text-amber-400 border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition font-semibold">
                Explore Private Banking
              </button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN1Y2Nlc3MlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc3MzE5MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional business meeting"
              className="rounded-2xl shadow-2xl border-4 border-amber-500/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
