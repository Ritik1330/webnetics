"use client";
// biome-ignore assist/source/organizeImports: <explanation>
import { ArrowRight } from "lucide-react";
import { HERO_WAVE } from "@/assets/images";
import Image from "next/image";
import { NeonShimmerButton } from "./ui/neon-shimmer-button";

interface Hero1Props {
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
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-400 via-amber-500 to-blue-600 px-4 py-20 md:py-32">
      {/* Enhanced animated background elements with orange-blue theme */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-amber-300/20 to-orange-400/20 rounded-full blur-2xl md:blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-300/18 to-indigo-400/18 rounded-full blur-xl md:blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/2 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-r from-yellow-300/22 to-orange-300/22 rounded-full blur-lg md:blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-30 max-w-7xl mx-auto">
        <div className="grid items-center gap-12 md:gap-16 lg:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-6 animate-in fade-in slide-in-from-left-6 duration-1000 delay-300">
              <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                {heading}
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-2 duration-1000 delay-700">
              {buttons.primary && (
                <NeonShimmerButton
                  variant="pink"
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-white text-primary font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a
                    href={buttons.primary.url}
                    className="flex items-center text-xl justify-center group  text-nowrap"
                  >
                    {buttons.primary.text}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </NeonShimmerButton>
              )}
              {buttons.secondary && (
                <NeonShimmerButton className="bg-gradient-to-r text-white font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  <a
                    href={buttons.secondary.url}
                    className="flex items-center text-xl  justify-center group text-nowrap"
                  >
                    {buttons.secondary.text}
                    <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </NeonShimmerButton>
              )}
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-3xl xl:max-w-3xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={650}
                className="w-full h-auto rounded-2xl"
              />
            </div>
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
