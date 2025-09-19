/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ArrowRight, BarChart2, Target, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Growth Strategy",
    category: "Digital Marketing",
    description:
      "How we helped an e-commerce brand achieve 150% revenue growth through targeted digital marketing campaigns.",
    results: ["150% Revenue Growth", "200% ROAS", "45% Lower CPA"],
    icon: TrendingUp,
  },
  {
    title: "B2B Lead Generation",
    category: "Lead Generation",
    description:
      "Generating high-quality B2B leads for a SaaS company through multi-channel marketing approach.",
    results: ["300+ Qualified Leads", "28% Conversion Rate", "45% Lower CPL"],
    icon: Target,
  },
  {
    title: "Brand Awareness Campaign",
    category: "Brand Marketing",
    description:
      "Building brand recognition and trust for a new market entrant through strategic digital presence.",
    results: ["2M+ Impressions", "35% Brand Recall", "150K Social Followers"],
    icon: BarChart2,
  },
];

export function CaseStudyShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-orange-400 mr-4"></div>
            <div className="w-3 h-0.5 bg-orange-400 mr-2"></div>
            <div className="w-6 h-0.5 bg-orange-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results, real impact. Explore how we've helped businesses
            transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <study.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-blue-600">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
