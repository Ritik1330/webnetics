import { Marquee } from "@/components/home/marquee";
import Link from "next/link";
import * as images from "@/assets/images";
import Image from "next/image";

const clientLogos = [
  { src: images.a.src, alt: "Client A" },
  { src: images.b.src, alt: "Client B" },
  { src: images.c.src, alt: "Client C" },
  { src: images.d.src, alt: "Client D" },
  { src: images.e.src, alt: "Client E" },
  { src: images.f.src, alt: "Client F" },
  { src: images.g.src, alt: "Client G" },
  { src: images.h.src, alt: "Client H" },
  { src: images.i.src, alt: "Client I" },
  { src: images.j.src, alt: "Client J" },
  { src: images.k.src, alt: "Client K" },
  { src: images.l.src, alt: "Client L" },
  { src: images.m.src, alt: "Client M" },
];

export function ClientsWhoTrustUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Clients Who Trust Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by leading brands across industries.
          </p>
        </div>
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] gap-8">
            {clientLogos.map((logo, idx) => (
              <Link href="#" key={logo.alt} className="block">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={64}
                  className="h-16 w-auto rounded-xl shadow bg-white p-2 mx-4"
                  draggable={false}
                />
              </Link>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
        </div>
      </div>
    </section>
  );
}
