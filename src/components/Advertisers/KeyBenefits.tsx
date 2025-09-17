"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

const benefits = [
  {
    title: "Targeted Reach",
    description:
      "Connect with your ideal audience through advanced targeting capabilities and data-driven insights.",
    icon: "🎯",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track campaign performance in real-time with comprehensive analytics and reporting tools.",
    icon: "📊",
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimize your advertising budget with flexible pricing models and performance-based campaigns.",
    icon: "💰",
  },
  {
    title: "Brand Safety",
    description:
      "Ensure your ads appear in brand-safe environments with our advanced content filtering.",
    icon: "🛡️",
  },
];

export function KeyBenefits() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the advantages that make our advertising solutions stand
            out from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
