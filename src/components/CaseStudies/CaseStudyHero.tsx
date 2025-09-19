"use client";

import { motion } from "framer-motion";

export function CaseStudyHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses achieve remarkable results through
            innovative digital marketing strategies
          </p>
        </motion.div>
      </div>

      {/* Animated dots background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        </div>
      </div>
    </section>
  );
}