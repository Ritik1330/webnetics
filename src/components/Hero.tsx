import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HERO_WAVE } from "@/assets/images";
import Image from "next/image";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Become An Advertiser",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Become A Publisher",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 px-4 py-20 md:py-32">
      {/* Animated background elements - Optimized for mobile */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            {badge && (
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 mb-4 md:mb-6 text-sm md:text-base">
                {badge}
                <ArrowUpRight className="ml-2 size-3 md:size-4" />
              </Badge>
            )}
            <h1 className="my-4 md:my-6 text-pretty text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              {heading}
            </h1>
            <p className="text-white/90 mb-6 md:mb-8 max-w-xl text-base md:text-lg lg:text-xl drop-shadow-md leading-relaxed">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 md:gap-4 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-6 md:px-8 py-3 text-base md:text-lg">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-6 md:px-8 py-3 text-base md:text-lg">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-3 md:size-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-xl"></div>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={400}
              className="relative max-h-64 md:max-h-80 lg:max-h-96 w-full rounded-lg object-cover shadow-2xl border border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Wave decoration - Responsive */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Image
          src={HERO_WAVE}
          alt="Hero wave decoration"
          width={1200}
          height={200}
          className="w-full h-auto max-h-24 md:max-h-32 lg:max-h-none"
        />
      </div>
    </section>
  );
};

export { Hero1 };
