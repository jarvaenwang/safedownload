"use client";

import { Software } from "@/data/software";
import SoftwareCard from "./SoftwareCard";

interface SoftwareGridProps {
  softwares: Software[];
  title?: string;
  description?: string;
}

export default function SoftwareGrid({ softwares, title, description }: SoftwareGridProps) {
  if (softwares.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">暂无软件数据</p>
      </div>
    );
  }

  return (
    <section id="popular" className="py-8 md:py-10 bg-secondary/30 scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        {(title || description) && (
          <div className="mb-8 md:mb-10">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="mt-2 text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {softwares.map((software) => (
            <SoftwareCard key={software.id} software={software} />
          ))}
        </div>
      </div>
    </section>
  );
}
