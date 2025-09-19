"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {
  Globe,
  Target,
  Smartphone,
  Mail,
  MessageCircle,
  Phone,
  Facebook,
  Search,
  CheckCircle2,
  Code,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Create stunning, responsive websites tailored to your business needs.",
    icon: Code,
    features: [
      "Custom Design",
      "Responsive Layout",
      "SEO Optimized",
      "Performance Focused",
    ],
  },
  {
    title: "App Development",
    description:
      "Build powerful mobile and web applications for your business.",
    icon: Smartphone,
    features: [
      "iOS & Android",
      "Cross-platform",
      "User-friendly UI",
      "Scalable Solutions",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence.",
    icon: Globe,
    features: ["SEO Optimization", "Content Marketing", "Analytics & Tracking"],
  },
  {
    title: "Brand Awareness",
    description:
      "Build and strengthen your brand identity across all digital channels.",
    icon: Target,
    features: ["Brand Strategy", "Visual Identity", "Brand Messaging"],
  },
  {
    title: "Social Media",
    description: "Engage your audience on leading social media platforms.",
    icon: Smartphone,
    features: [
      "Content Creation",
      "Community Management",
      "Engagement Strategy",
    ],
  },
  {
    title: "Retargeting",
    description:
      "Re-engage potential customers with targeted advertising campaigns.",
    icon: Target,
    features: ["Custom Audiences", "Dynamic Ads", "Cross-platform Retargeting"],
  },
  {
    title: "Email Marketing",
    description: "Create impactful email campaigns with high conversion rates.",
    icon: Mail,
    features: [
      "Personalization",
      "Automation",
      "A/B Testing",
      "Campaign Analytics",
    ],
  },
  {
    title: "SMS Marketing",
    description:
      "Direct and immediate customer engagement through text messages.",
    icon: MessageSquare,
    features: [
      "Bulk SMS",
      "Automated Responses",
      "Delivery Tracking",
      "Campaign Management",
    ],
  },
  {
    title: "Chat Support",
    description: "24/7 customer support through modern chat solutions.",
    icon: MessageCircle,
    features: ["Live Chat", "Chatbots", "Multi-channel Support"],
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Leverage WhatsApp Business API for direct customer engagement.",
    icon: Phone,
    features: [
      "Business Messages",
      "Automated Responses",
      "Campaign Analytics",
    ],
  },
  {
    title: "Facebook Marketing",
    description: "Targeted advertising and engagement on Facebook.",
    icon: Facebook,
    features: ["Ad Campaigns", "Audience Targeting", "Performance Tracking"],
  },
  {
    title: "Google Ads",
    description: "Strategic PPC campaigns to drive qualified traffic.",
    icon: Search,
    features: ["Search Ads", "Display Network", "Conversion Optimization"],
  },
];

export function ServicesShowcase() {
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
          <h2 className="text-4xl font-bold mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the
            digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-orange-500/50">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-amber-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(service.icon, {
                      className: "w-8 h-8 text-blue-500",
                    })}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transform rotate-45 translate-x-10 -translate-y-10" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
