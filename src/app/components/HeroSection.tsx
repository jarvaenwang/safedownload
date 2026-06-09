"use client";

import { useState, useEffect } from "react";
import { Search, ArrowDown, Shield, Download, Users, CheckCircle } from "lucide-react";
import { categories } from "@/data/software";
import Link from "next/link";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

const rotatingWords = ["安全", "快速", "纯净", "放心"];

// 文字高亮颜色配置 - 渐变色文字 + Aero透明背景
const wordStyles: Record<string, { gradient: string; border: string; shadow: string }> = {
  "安全": { gradient: "from-emerald-600 to-teal-500", border: "border-emerald-500/50", shadow: "shadow-emerald-500/30" },
  "快速": { gradient: "from-blue-600 to-cyan-500", border: "border-blue-500/50", shadow: "shadow-blue-500/30" },
  "纯净": { gradient: "from-violet-600 to-purple-500", border: "border-violet-500/50", shadow: "shadow-violet-500/30" },
  "放心": { gradient: "from-amber-600 to-orange-500", border: "border-amber-500/50", shadow: "shadow-amber-500/30" },
};

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  const stats = [
    { icon: <Shield className="w-5 h-5" />, value: "50+", label: "安全软件" },
    { icon: <Download className="w-5 h-5" />, value: "100%", label: "官网链接" },
    { icon: <Users className="w-5 h-5" />, value: "0", label: "捆绑软件" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "100%", label: "免费使用" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 lg:px-6 pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight whitespace-nowrap">
              <span>让软件下载更</span>
              <span 
                key={rotatingWords[currentWord]}
                className={`inline-block min-w-[4ch] text-3xl md:text-5xl lg:text-6xl px-3 py-1 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl ${wordStyles[rotatingWords[currentWord]].shadow} bg-gradient-to-r ${wordStyles[rotatingWords[currentWord]].gradient} bg-clip-text text-transparent animate-word-highlight`}
              >
                {rotatingWords[currentWord]}
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              汇集常用软件官方下载地址，远离捆绑安装和病毒木马
              <br className="hidden md:block" />
              让每一个人都能安全、放心地下载软件
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="w-full max-w-xl">
            <div className="relative group search-glow rounded-full transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-xl opacity-50 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-center rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-4" />
                <input
                  type="search"
                  placeholder="搜索软件名称，例如：Chrome、VS Code..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-base focus:outline-none placeholder:text-muted-foreground/60"
                />
                <button
                  type="submit"
                  className="btn-shine px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  搜索
                </button>
              </div>
            </div>
          </form>

          {/* Category Quick Links */}
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-3">
              {categories.filter(cat => ['office', 'media', 'social', 'utility', 'design', 'ai'].includes(cat.id)).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-500 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl icon-float">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-semibold">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="text-primary">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
