"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {
  Smartphone,
  Target,
  DollarSign,
  LineChart,
  BarChart2,
  Link2,
} from "lucide-react";

const features = [
  {
    title: "Ad Format Flexibility",
    description:
      "Choose from a variety of ad formats including display, native, and video ads to match your content.",
    icon: Smartphone,
  },
  {
    title: "Smart Ad Placement",
    description:
      "AI-powered technology to optimize ad placements for maximum revenue without compromising user experience.",
    icon: Target,
  },
  {
    title: "Real-time Bidding",
    description:
      "Access to premium advertisers through our real-time bidding platform for optimal revenue.",
    icon: DollarSign,
  },
  {
    title: "Content Monetization",
    description:
      "Multiple monetization strategies including programmatic advertising and sponsored content.",
    icon: LineChart,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics to track performance, revenue, and audience engagement.",
    icon: BarChart2,
  },
  {
    title: "API Integration",
    description:
      "Easy integration with your existing systems through our robust API and SDK.",
    icon: Link2,
  },
];

export function SeeWhatsInside() {
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
          <h2 className="text-4xl font-bold mb-4">See What&apos;s Inside</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features and tools available to publishers on
            our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-orange-500/50">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-amber-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {React.createElement(feature.icon, {
                    className: "w-8 h-8 text-blue-500",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
