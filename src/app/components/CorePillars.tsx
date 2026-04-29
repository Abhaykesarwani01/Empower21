import { TrendingUp, Users, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import img1 from "../../imports/1.png";
import img2 from "../../imports/2.png";
import img3 from "../../imports/3.png";

export function CorePillars() {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Personal Assistance',
      description: 'Receive dedicated personal assistance tailored to your career. From administrative support to banking culture, we provide comprehensive services to streamline your professional and personal life.',
      link: 'Learn More',
      image: img1
    },
    {
      icon: Users,
      title: 'Expert Career Strategy',
      description: 'Book a 1-on-1, personalized career strategy session with industry veterans at absolutely no cost. Navigate your career path with clarity.',
      link: 'Schedule Session',
      image: img2
    },
    {
      icon: Briefcase,
      title: '100% Placement Assurance',
      description: 'We don\'t just guide you; we guarantee your success. Benefit from proactive networking and guaranteed placement with top corporate partners.',
      link: 'Learn More',
      image: img3
    }
  ];

  return (
    <section id="private-banking" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for the Modern Professional
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-amber-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition group/link font-semibold"
                  >
                    {pillar.link}
                    <ArrowRight className="group-hover/link:translate-x-1 transition" size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
