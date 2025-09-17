"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function AdvertisersCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of successful advertisers who have transformed their
            marketing with our platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Start Advertising
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
