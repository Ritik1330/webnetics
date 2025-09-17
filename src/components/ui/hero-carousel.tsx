"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoplayInterval?: number;
}

export const HeroCarousel = ({
  children,
  className,
  autoplayInterval = 5000,
}: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [startX, setStartX] = React.useState<number | null>(null);
  const [currentX, setCurrentX] = React.useState<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const minSwipeDistance = 50;

  const next = React.useCallback(() => {
    setActiveIndex((current) => (current + 1) % children.length);
  }, [children.length]);

  const prev = React.useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + children.length) % children.length,
    );
  }, [children.length]);

  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(next, autoplayInterval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [next, autoplayInterval, isPaused]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging || !startX || !currentX) return;

    const distance = startX - currentX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    setIsDragging(false);
    setStartX(null);
    setCurrentX(null);
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
    <div
      className={cn(
        "relative w-full touch-pan-y select-none cursor-grab active:cursor-grabbing",
        className,
        { "cursor-grabbing": isDragging },
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => {
        setIsPaused(false);
        handleDragEnd();
      }}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="overflow-hidden">
        <div
          className={cn("flex transition-transform duration-500 ease-out", {
            "transition-none": isDragging,
          })}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={`slide-${children.length}-${index}`}
              className="w-full flex-shrink-0"
              aria-hidden={index !== activeIndex}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {children.map((_, index) => (
          <button
            key={`indicator-${children.length}-${index}`}
            type="button"
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === activeIndex ? "bg-white" : "bg-white/50",
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
