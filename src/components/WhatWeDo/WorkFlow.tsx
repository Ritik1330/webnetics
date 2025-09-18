"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

const workflowSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We analyze your business needs and develop a tailored digital strategy.",
    icon: "🎯",
  },
  {
    title: "Campaign Planning",
    description:
      "Create detailed campaign roadmaps with clear goals and metrics.",
    icon: "📋",
  },
  {
    title: "Implementation",
    description: "Execute campaigns across chosen platforms with precision.",
    icon: "⚡",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Real-time tracking and continuous optimization for best results.",
    icon: "📊",
  },
  {
    title: "Reporting & Analysis",
    description: "Comprehensive reports with actionable insights.",
    icon: "📈",
  },
];

export function WorkFlow() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Efficient and Transparent Work Flow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our systematic approach ensures successful campaign execution and
            measurable results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-blue-600 transform -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500">
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>

                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-lg" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
