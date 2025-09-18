"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence.",
    icon: "🌐",
    features: ["SEO Optimization", "Content Marketing", "Analytics & Tracking"],
  },
  {
    title: "Brand Awareness",
    description:
      "Build and strengthen your brand identity across all digital channels.",
    icon: "🎯",
    features: ["Brand Strategy", "Visual Identity", "Brand Messaging"],
  },
  {
    title: "Social Media",
    description: "Engage your audience on leading social media platforms.",
    icon: "📱",
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
    icon: "🎯",
    features: ["Custom Audiences", "Dynamic Ads", "Cross-platform Retargeting"],
  },
  {
    title: "Email Marketing",
    description: "Create impactful email campaigns that convert.",
    icon: "📧",
    features: ["Personalization", "Automation", "A/B Testing"],
  },
  {
    title: "Chat Support",
    description: "24/7 customer support through modern chat solutions.",
    icon: "💬",
    features: ["Live Chat", "Chatbots", "Multi-channel Support"],
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Leverage WhatsApp Business API for direct customer engagement.",
    icon: "📲",
    features: [
      "Business Messages",
      "Automated Responses",
      "Campaign Analytics",
    ],
  },
  {
    title: "Facebook Marketing",
    description: "Targeted advertising and engagement on Facebook.",
    icon: "👥",
    features: ["Ad Campaigns", "Audience Targeting", "Performance Tracking"],
  },
  {
    title: "Google Ads",
    description: "Strategic PPC campaigns to drive qualified traffic.",
    icon: "🎯",
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
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
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
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Feature check icon</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
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
