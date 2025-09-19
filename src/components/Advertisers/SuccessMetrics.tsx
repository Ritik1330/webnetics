"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Quote } from "lucide-react";

const metrics = [
  {
    value: "500M+",
    label: "Monthly Impressions",
    description: "Reach a massive audience across our network",
  },
  {
    value: "25%",
    label: "Average CTR",
    description: "Higher engagement rates than industry standard",
  },
  {
    value: "85%",
    label: "Client Retention",
    description: "Advertisers who continue to choose our platform",
  },
  {
    value: "3X",
    label: "ROI Average",
    description: "Return on advertising investment",
  },
];

const testimonials = [
  {
    quote:
      "The targeting capabilities and ROI we've seen have exceeded our expectations. A game-changer for our brand.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
  },
  {
    quote:
      "The real-time analytics and optimization tools have helped us maximize our advertising budget effectively.",
    author: "Michael Chen",
    role: "Digital Marketing Manager",
    company: "GlobalBrands",
  },
];

export function SuccessMetrics() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform delivers measurable success for advertisers across
            industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {metric.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8">
                <Quote
                  className="h-8 w-8 text-gray-400 mb-4"
                  aria-hidden="true"
                />
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
