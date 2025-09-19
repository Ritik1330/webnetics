"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Lightbulb, Target, BarChart2, Trophy } from "lucide-react";

const processSteps = [
  {
    title: "Challenge Identification",
    description:
      "We deeply analyze the client's business challenges and objectives to understand their unique needs.",
    icon: Lightbulb,
  },
  {
    title: "Strategy Development",
    description:
      "Our team crafts a tailored strategy aligned with the client's goals and market opportunities.",
    icon: Target,
  },
  {
    title: "Implementation & Optimization",
    description:
      "We execute the strategy with precision, continuously monitoring and optimizing for best results.",
    icon: BarChart2,
  },
  {
    title: "Results & Success",
    description:
      "Measuring success through concrete metrics and celebrating achieved milestones together.",
    icon: Trophy,
  },
];

export function CaseStudyProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-orange-400 mr-4"></div>
            <div className="w-3 h-0.5 bg-orange-400 mr-2"></div>
            <div className="w-6 h-0.5 bg-orange-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Success Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that consistently delivers outstanding results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}