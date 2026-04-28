import { Search, FileEdit, Network, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export function AssuranceProcess() {
  const steps = [
    {
      icon: Search,
      title: 'Skills Evaluation & Assessment',
      description: 'Comprehensive analysis of your current technical and soft skills to identify the perfect industry fit.',
      color: 'blue'
    },
    {
      icon: FileEdit,
      title: 'Resume Optimization & Mock Interviews',
      description: 'Refining your professional profile and conducting rigorous mock interviews to ensure you are fully prepared.',
      color: 'green'
    },
    {
      icon: Network,
      title: 'Partner Connections',
      description: 'Directly introducing your profile to our network of global corporate partners and elite hiring managers.',
      color: 'purple'
    },
    {
      icon: Trophy,
      title: '100% Guaranteed Placement',
      description: 'Securing your role. We stand by our commitment to place you in a position that matches your ambition.',
      color: 'amber',
      milestone: true
    }
  ];

  const colorClasses = {
    blue: 'bg-slate-900 text-amber-400 border-amber-500',
    green: 'bg-slate-900 text-amber-400 border-amber-500',
    purple: 'bg-slate-900 text-amber-400 border-amber-500',
    amber: 'bg-amber-500 text-slate-900 border-amber-600'
  };

  return (
    <section id="job-assurance" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Assurance Process: How We Secure Your Role
          </h2>
          <p className="text-xl text-gray-600">
            A transparent, step-by-step pathway to your next big career move.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = colorClasses[step.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  className="relative flex gap-6 md:gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  {/* Icon circle */}
                  <div className={`flex-shrink-0 mt-8 w-16 h-16 rounded-full ${colorClass} border-4 flex items-center justify-center z-10`}>
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        {step.milestone && (
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full whitespace-nowrap">
                            Milestone
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
