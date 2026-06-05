"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Lightbulb, Bug, Heart } from "lucide-react";
import { init } from "@waline/client";
import "@waline/client/style";

// TODO: 部署后替换为腾讯云云函数地址
// 格式：https://service-xxx-xxx.gz.apigw.tencentcs.com/release/waline-server
const WALINE_SERVER_URL = "https://waline-demo.vercel.app";

export default function FeedbackSection() {
  const walineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!walineRef.current) return;

    const walineInstance = init({
      el: walineRef.current,
      serverURL: WALINE_SERVER_URL,
      path: "/",
      lang: "zh-CN",
      locale: {
        placeholder: "欢迎留下你的想法...",
      },
      meta: ["nick", "mail", "link"],
      requiredMeta: ["nick"],
      pageSize: 10,
      wordLimit: 500,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://unpkg.com/@waline/emojis@1.1.0/alus",
      ],
      dark: 'html[class="dark"]',
    });

    return () => {
      walineInstance?.destroy();
    };
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "软件推荐",
      desc: "推荐好用的软件",
    },
    {
      icon: <Bug className="w-5 h-5" />,
      title: "问题反馈",
      desc: "链接失效或错误",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "使用感受",
      desc: "分享你的想法",
    },
  ];

  return (
    <section id="feedback" className="py-10 md:py-12 bg-gradient-to-b from-background via-secondary/20 to-secondary/30 scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          {/* 标题区 */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">留言反馈</h2>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto">
              有软件推荐？发现链接失效？或者只是想打个招呼？欢迎留下你的想法！
            </p>
          </div>

          {/* 功能标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-sm"
              >
                <span className="text-primary">{feature.icon}</span>
                <span className="font-medium">{feature.title}</span>
                <span className="text-muted-foreground">· {feature.desc}</span>
              </div>
            ))}
          </div>

          {/* Waline 评论区 */}
          <div className="rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-4 md:p-6 shadow-sm">
            <div ref={walineRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
