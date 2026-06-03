import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-black mb-2">404</h1>
          <p className="text-lg text-muted-foreground">页面不存在</p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          返回
        </Link>
      </div>
    </div>
  );
}
