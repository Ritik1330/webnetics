"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Real-time revenue tracking",
  "Detailed performance analytics",
  "Audience insights and demographics",
  "Custom report generation",
  "Revenue forecasting",
  "Integration with major analytics platforms",
];

export function TransparentReporting() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Transparent Reporting</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get complete visibility into your earnings with our comprehensive
              analytics and reporting tools. Make data-driven decisions to
              optimize your revenue.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              View Demo Dashboard
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/analytics-dashboard.png"
              alt="Analytics Dashboard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
