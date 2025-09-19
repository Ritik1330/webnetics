/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Display Advertising",
    description:
      "Engage users with visually appealing banner ads across our network of premium websites.",
    features: [
      "Premium placements",
      "Multiple ad formats",
      "Creative optimization",
      "Brand safety controls",
    ],
    price: "Starting at $500/month",
  },
  {
    title: "Native Advertising",
    description:
      "Seamlessly integrate your content into our platform for maximum engagement.",
    features: [
      "Content matching",
      "Contextual targeting",
      "Performance tracking",
      "A/B testing",
    ],
    price: "Starting at $750/month",
    featured: true,
  },
  {
    title: "Video Advertising",
    description:
      "Capture attention with engaging video content across multiple platforms.",
    features: [
      "Pre-roll/mid-roll ads",
      "Interactive elements",
      "View-through rates",
      "Cross-device targeting",
    ],
    price: "Starting at $1000/month",
  },
];

export function AdvertisingSolutions() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Advertising Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect advertising package that aligns with your
            marketing goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                className={`p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent ${
                  solution.featured
                    ? "border-orange-500"
                    : "hover:border-orange-500/50"
                }`}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-amber-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {solution.featured && (
                  <div className="bg-gradient-to-r from-orange-400 to-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full self-start mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-lg font-semibold mb-4">{solution.price}</p>
                  <Button className="w-full bg-gradient-to-r from-orange-400 to-blue-600 hover:from-orange-500 hover:to-blue-700 text-white transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
