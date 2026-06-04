"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import SoftwareGrid from "./components/SoftwareGrid";
import SafetyBanner from "./components/SafetyBanner";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";
import { getPopularSoftware } from "@/data/software";

export default function Home() {
  const router = useRouter();
  const popularSoftware = getPopularSoftware();
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false);

  // 五个区域的 id
  const sectionIds = ["hero", "categories", "popular", "safety", "feedback"];

  const scrollToSection = useCallback((index: number) => {
    // 允许自由滚动到 Footer 区域（index 超出范围时不拦截，直接返回）
    if (index < 0) return;

    isScrolling.current = true;
    currentSectionIndex.current = index;

    // 如果索引在 sectionIds 范围内，滚动到对应区域
    if (index < sectionIds.length) {
      const targetId = sectionIds[index];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // 800ms 冷却时间，防止连续触发
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  }, [sectionIds]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 如果在输入框或文本域内，不拦截
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // 如果在可滚动容器内（如分类卡片的横向滚动），不拦截
      const scrollableParent = target.closest("[data-scrollable], .overflow-x-auto, .overflow-y-auto");
      if (scrollableParent) {
        const el = scrollableParent as HTMLElement;
        const isScrollableX = el.scrollWidth > el.clientWidth;
        const isScrollableY = el.scrollHeight > el.clientHeight;

        if (isScrollableX || isScrollableY) {
          // 检查是否在边界
          const isAtTop = el.scrollTop === 0;
          const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          const isAtLeft = el.scrollLeft === 0;
          const isAtRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

          // 垂直滚动时，如果容器可垂直滚动且不在边界，不拦截
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && isScrollableY) {
            if (e.deltaY > 0 && !isAtBottom) return;
            if (e.deltaY < 0 && !isAtTop) return;
          }
          // 水平滚动时，如果容器可水平滚动且不在边界，不拦截
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && isScrollableX) {
            if (e.deltaX > 0 && !isAtRight) return;
            if (e.deltaX < 0 && !isAtLeft) return;
          }
        }
      }

      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      // 判断滚动方向（设置阈值 30，避免轻微滚动触发）
      if (e.deltaY > 30) {
        // 向下滚动
        // 如果已经在最后一个区域，允许自由滚动到 Footer，不再拦截
        if (currentSectionIndex.current >= sectionIds.length - 1) {
          return;
        }
        e.preventDefault();
        scrollToSection(currentSectionIndex.current + 1);
      } else if (e.deltaY < -30) {
        // 向上滚动
        e.preventDefault();
        scrollToSection(currentSectionIndex.current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollToSection]);

  // 监听滚动结束，更新当前区域索引
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // 根据滚动位置判断当前在哪个区域
        const scrollY = window.scrollY;
        const heroEl = document.getElementById("hero");
        const categoriesEl = document.getElementById("categories");
        const popularEl = document.getElementById("popular");
        const safetyEl = document.getElementById("safety");
        const feedbackEl = document.getElementById("feedback");

        if (heroEl && categoriesEl && popularEl && safetyEl && feedbackEl) {
          const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
          const categoriesBottom = categoriesEl.offsetTop + categoriesEl.offsetHeight;
          const popularBottom = popularEl.offsetTop + popularEl.offsetHeight;
          const safetyBottom = safetyEl.offsetTop + safetyEl.offsetHeight;

          if (scrollY < heroBottom / 2) {
            currentSectionIndex.current = 0;
          } else if (scrollY < categoriesBottom - 100) {
            currentSectionIndex.current = 1;
          } else if (scrollY < popularBottom - 100) {
            currentSectionIndex.current = 2;
          } else if (scrollY < safetyBottom - 100) {
            currentSectionIndex.current = 3;
          } else {
            currentSectionIndex.current = 4;
          }
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onSearch={handleSearch} />
      <main className="flex-1">
        <HeroSection onSearch={handleSearch} />
        <CategorySection />
        <SoftwareGrid
          softwares={popularSoftware}
          title="热门软件"
          description="精选常用软件，点击即可前往官网下载"
        />
        <SafetyBanner />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
}
