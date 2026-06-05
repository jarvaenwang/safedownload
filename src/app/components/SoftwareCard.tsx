"use client";

import { ExternalLink, Monitor, Apple } from "lucide-react";
import { Software } from "@/data/software";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SoftwareCardProps {
  software: Software;
}

// 预检查图标是否存在（支持 PNG 和 SVG）
function useIconPath(id: string) {
  const [iconPath, setIconPath] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // 先检查 PNG，再检查 SVG
    const pngPath = `/icons/${id}.png`;
    const svgPath = `/icons/${id}.svg`;

    // 尝试加载 PNG
    const img = new window.Image();
    img.onload = () => {
      setIconPath(pngPath);
      setChecked(true);
    };
    img.onerror = () => {
      // PNG 不存在，尝试 SVG
      const svgImg = new window.Image();
      svgImg.onload = () => {
        setIconPath(svgPath);
        setChecked(true);
      };
      svgImg.onerror = () => {
        // 都没有，使用 fallback
        setIconPath(null);
        setChecked(true);
      };
      svgImg.src = svgPath;
    };
    img.src = pngPath;
  }, [id]);

  return { iconPath, checked };
}

export default function SoftwareCard({ software }: SoftwareCardProps) {
  const { iconPath, checked } = useIconPath(software.id);
  
  return (
    <div className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md card-hover">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center text-3xl shrink-0 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
          {checked && iconPath ? (
            <Image
              src={iconPath}
              alt={software.name}
              width={56}
              height={56}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-3xl">{software.icon}</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {software.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {software.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-1.5">
        {software.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="relative flex flex-wrap gap-2 mt-auto">
        <a
          href={software.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm transition-colors min-w-0 flex-1"
        >
          <span className="w-4 h-4 flex items-center justify-center shrink-0">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
          <span className="truncate">官网</span>
        </a>

        {software.windowsUrl && (
          <a
            href={software.windowsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-colors min-w-0 flex-1"
          >
            <span className="w-4 h-4 flex items-center justify-center shrink-0">
              <Monitor className="w-3.5 h-3.5" />
            </span>
            <span className="truncate">Windows</span>
          </a>
        )}

        {software.macUrl && (
          <a
            href={software.macUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm transition-colors min-w-0 flex-1"
          >
            <span className="w-4 h-4 flex items-center justify-center shrink-0">
              <Apple className="w-3.5 h-3.5" />
            </span>
            <span className="truncate">Mac</span>
          </a>
        )}
      </div>
    </div>
  );
}
