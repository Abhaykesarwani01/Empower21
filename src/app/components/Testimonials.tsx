import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "The strategic advice I received was instrumental in securing my new role. The resume optimization alone made a huge difference.",
      author: "Elizabeth C.",
      role: "Operations Executive"
    },
    {
      quote: "Their network connections and interview prep made the process seamless. Highly recommend the placement assurance program!",
      author: "Michael K.",
      role: "Finance Director"
    },
    {
      quote: "Exceptional experience from the free consultancy to the final job offer. The private banking perks are a massive bonus.",
      author: "David L.",
      role: "Software Architect"
    }
  ];

  const logos = [
    { name: 'HDFC', width: 120 },
    { name: 'AXIS', width: 80 },
    { name: 'BANDHAN', width: 140 },
    // { name: 'Accenture', width: 140 },
    // { name: 'Goldman Sachs', width: 150 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Trusted by Industry Leaders
          </h2>

          {/* Company logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-20 opacity-50">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white rounded-lg shadow-sm"
                style={{ width: `${logo.width}px` }}
              >
                <div className="text-gray-400 font-semibold text-center">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Quote className="text-amber-500 mb-6" size={40} />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
