/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  centerContent?: React.ReactNode;
}

export function OrbitingCircles({
  className,
  children,
  radius = 160,
  path = true,
  iconSize = 60, // increased default icon size from 40 to 60
  centerContent,
}: OrbitingCirclesProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
    >
      {path && (
        <>
          <div
            className="absolute rounded-full border-2 border-dashed border-muted-foreground/20"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
          />
          <div
            className="absolute rounded-full border border-dashed border-muted-foreground/10"
            style={{
              width: radius * 2 + 60,
              height: radius * 2 + 60,
            }}
          />
        </>
      )}

      {/* Center Content */}
      {centerContent && (
        <div className="absolute z-10 flex items-center justify-center">
          <div className=" rounded-full p-6 shadow-lg border border-gray-100">
            {centerContent}
          </div>
        </div>
      )}

      {childrenArray.map((child, index) => {
        const angle = (360 / childrenArray.length) * index;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{
              width: iconSize,
              height: iconSize,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-100">
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}
