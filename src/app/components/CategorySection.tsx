"use client";

import { categories } from "@/data/software";
import Link from "next/link";

export default function CategorySection() {
  return (
    <section id="categories" className="py-8 md:py-10 bg-background scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">按分类浏览</h2>
          <p className="mt-2 text-muted-foreground">找到你需要的软件类型</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}/`}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-500 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-purple-500/10 flex items-center justify-center text-3xl icon-float shadow-sm group-hover:shadow-md transition-shadow">
                {cat.icon}
              </div>
              <div className="text-center">
                <h3 className="font-semibold">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
