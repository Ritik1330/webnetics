"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { User, Mail, Phone, Globe, Send } from "lucide-react";

const opportunities = [
  {
    value: "advertiser",
    label: "Advertiser",
    description: "Interested in advertising opportunities",
  },
  {
    value: "affiliate",
    label: "Affiliate",
    description: "Want to join our affiliate program",
  },
  {
    value: "career",
    label: "Career",
    description: "Looking for job opportunities",
  },
  {
    value: "general",
    label: "General",
    description: "General inquiries",
  },
  {
    value: "other",
    label: "Other",
    description: "Other questions or requests",
  },
] as const;

const formSchema = z.object({
  opportunity: z.string().min(1, "Please select an opportunity."),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  website: z
    .string()
    .url({
      message: "Please enter a valid website URL.",
    })
    .optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Drop Us a Line</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="opportunity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Opportunity</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an opportunity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {opportunities.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <div>
                              <div className="font-medium">{item.label}</div>
                              <div className="text-sm text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="John Doe"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="+1 (555) 123-4567"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="https://yourwebsite.com"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 via-amber-500 to-blue-600 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
