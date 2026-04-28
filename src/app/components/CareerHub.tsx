import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function CareerHub() {
  return (
    <section id="career-hub" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Your Professional Journey
          </h2>
        </motion.div>

        {/* Consultancy Booking */}
        <motion.div
          className="bg-slate-900 rounded-2xl p-10 shadow-lg border border-amber-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
            <Calendar className="text-amber-500" size={32} />
          </div>
          <h3 className="text-3xl font-semibold text-white mb-4">
            Book Your Expert Consultation
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Choose a time that works for you. Connect directly with our Head Advisors to discuss your goals, assess your skills, and map out your placement journey.
          </p>
          <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-amber-500/10">
            <h4 className="font-semibold text-amber-400 mb-3">What to Expect:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Comprehensive skills assessment</li>
              <li>• Personalized career roadmap</li>
              <li>• Industry insights from veterans</li>
              <li>• Direct path to placement</li>
            </ul>
          </div>
          {/* i want to add link to the button */}
          <a
            href="https://api.whatsapp.com/send?phone=918887296928&text=Hi%2C%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block"
          >
            <button className="w-full px-8 py-4 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition flex items-center justify-center gap-2 font-semibold">
              <Calendar size={20} />
              Book Now
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
