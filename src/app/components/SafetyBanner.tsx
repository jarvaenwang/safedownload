"use client";

import { Shield, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export default function SafetyBanner() {
  const tips = [
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      title: "认准官网",
      description: "始终从软件官方网站下载，避免第三方下载站",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: "警惕捆绑",
      description: "安装时仔细阅读每一步，取消勾选额外软件",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      title: "校验文件",
      description: "大文件建议核对官网提供的 MD5/SHA 校验值",
    },
    {
      icon: <ExternalLink className="w-5 h-5 text-purple-500" />,
      title: "检查链接",
      description: "确认网址是官方域名，注意拼写相似的钓鱼网站",
    },
  ];

  return (
    <section id="safety" className="py-8 md:py-10 bg-background scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">安全下载提示</h2>
          <p className="mt-2 text-muted-foreground">遵循这些建议，保护你的电脑安全</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  {tip.icon}
                </div>
                <h3 className="font-semibold">{tip.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
