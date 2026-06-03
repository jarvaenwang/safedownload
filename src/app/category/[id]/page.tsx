import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import SoftwareGrid from "@/app/components/SoftwareGrid";
import Footer from "@/app/components/Footer";
import { getSoftwareByCategory, getCategoryById, categories } from "@/data/software";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    id: cat.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = getCategoryById(id);
  if (!category) return {};

  return {
    title: `${category.name} - SafeDownload`,
    description: `${category.description}，提供安全官方下载链接`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = getCategoryById(id);

  if (!category) {
    notFound();
  }

  const softwares = getSoftwareByCategory(id);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-8">
        {/* Category Header */}
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
                <p className="text-muted-foreground mt-1">{category.description}</p>
              </div>
            </div>
            {/* 返回按钮 */}
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              返回
            </Link>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mt-4 mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              首页
            </Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>
        </div>

        <SoftwareGrid softwares={softwares} />

        {/* Empty State */}
        {softwares.length === 0 && (
          <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-16 text-center">
            <p className="text-lg text-muted-foreground">该分类暂无软件，敬请期待...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
