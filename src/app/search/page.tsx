"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/app/components/Header";
import SoftwareGrid from "@/app/components/SoftwareGrid";
import Footer from "@/app/components/Footer";
import { searchSoftware } from "@/data/software";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchSoftware(query) : [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-8">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              返回
            </Link>

            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  搜索结果
                </h1>
                <p className="text-muted-foreground mt-1">
                  {query ? `「${query}」的搜索结果` : "请输入搜索关键词"}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          {query ? (
            results.length > 0 ? (
              <SoftwareGrid softwares={results} />
            ) : (
              <div className="py-16 text-center">
                <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">未找到相关软件</h3>
                <p className="text-muted-foreground">
                  尝试使用其他关键词，或浏览分类查找
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  浏览全部软件
                </Link>
              </div>
            )
          ) : (
            <div className="py-16 text-center">
              <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">在上方搜索框输入软件名称开始搜索</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">搜索中...</div>
        </main>
        <Footer />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
