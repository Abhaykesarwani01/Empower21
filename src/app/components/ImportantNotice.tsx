import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ImportantNotice() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50 border-y border-amber-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex gap-4 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex-shrink-0">
            <AlertCircle className="text-amber-600" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Important Notice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Please note that <span className="font-semibold">EMPOWER21 does not charge any fee/money at any stage of the recruitment process</span> and has not authorized any person/agency/partner/vendor to collect any fee/money for the recruitment. If you come across any such mail, advertisements, or persons who claim to offer jobs at Banks in lieu of cash (refundable or non-refundable), please refrain from responding to them and do not pay any fee/money to them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
