"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Sun, Moon, Menu, X, Share2, Link2, MessageCircle } from "lucide-react";
import { categories } from "@/data/software";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

function ShareButton() {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareQQ = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=SafeDownload&desc=发现一个好用的软件下载导航网站`;
    window.open(qqUrl, "qq-share", "width=600,height=500,toolbar=no,menubar=no,scrollbars=yes,resizable=yes");
    setShowShareMenu(false);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const wechatQRUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
        aria-label="分享"
      >
        <Share2 className="w-4 h-4" />
      </button>

      {showShareMenu && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
          {/* 复制链接 */}
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors"
          >
            <Link2 className="w-5 h-5 text-primary" />
            <span className="text-base">{copied ? "已复制！" : "复制链接"}</span>
          </button>
          
          {/* 微信分享 - 悬停显示二维码 */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredItem('wechat')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              className="w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="text-base">微信分享</span>
            </button>
            
            {/* 微信二维码浮层 - 悬停时显示 */}
            {hoveredItem === 'wechat' && (
              <div className="absolute right-full top-0 mr-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-52">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">微信扫一扫分享</p>
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img 
                      src={wechatQRUrl}
                      alt="微信分享二维码"
                      className="w-40 h-40 mx-auto"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">打开微信扫一扫</p>
                </div>
                {/* 箭头 */}
                <div className="absolute right-[-6px] top-4 w-3 h-3 bg-white dark:bg-gray-900 border-r border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </div>
            )}
          </div>
          
          {/* QQ分享 - 悬停显示提示 */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredItem('qq')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              onClick={handleShareQQ}
              className="w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors"
            >
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29.43 2.21 0 6.287.257 6.287-.43 0-.687-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"/>
              </svg>
              <span className="text-base">QQ分享</span>
            </button>
            
            {/* QQ分享二维码 - 悬停时显示 */}
            {hoveredItem === 'qq' && (
              <div className="absolute right-full top-0 mr-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-52">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">QQ扫一扫分享</p>
                  <div className="bg-white p-2 rounded-lg border border-gray-100">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(document.title)}&source=SafeDownload&desc=发现一个好用的软件下载导航网站`)}`}
                      alt="QQ分享二维码"
                      className="w-40 h-40 mx-auto"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">打开QQ扫一扫</p>
                </div>
                {/* 箭头 */}
                <div className="absolute right-[-6px] top-4 w-3 h-3 bg-white dark:bg-gray-900 border-r border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  // 初始化时读取 localStorage 中的主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
      aria-label="切换主题"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default function Header({ onSearch }: HeaderProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    if (!query) return;
    
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/logo.png"
              alt="SafeDownload"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full search-glow rounded-full transition-shadow duration-300">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="搜索软件..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ShareButton />
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="菜单"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="搜索软件..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </form>

            {/* Mobile Categories */}
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors"
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
