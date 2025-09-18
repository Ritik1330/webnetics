"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subDetails: "Monday to Friday, 9am to 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@webnetics.com",
    subDetails: "Online support 24/7",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Business Avenue",
    subDetails: "New York, NY 10001",
  },
];

export function GetInTouch() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 via-amber-500 to-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {info.title}
              </h3>
              <p className="text-white/90 mb-1">{info.details}</p>
              <p className="text-white/70 text-sm">{info.subDetails}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
