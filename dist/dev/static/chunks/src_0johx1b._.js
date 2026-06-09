(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/software.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "getCategoryById",
    ()=>getCategoryById,
    "getPopularSoftware",
    ()=>getPopularSoftware,
    "getSoftwareByCategory",
    ()=>getSoftwareByCategory,
    "getSoftwareById",
    ()=>getSoftwareById,
    "searchSoftware",
    ()=>searchSoftware,
    "softwareList",
    ()=>softwareList
]);
const categories = [
    {
        id: 'office',
        name: '效率办公',
        icon: '📄',
        description: '文档表格演示工具'
    },
    {
        id: 'media',
        name: '影音娱乐',
        icon: '🎬',
        description: '音视频播放与编辑'
    },
    {
        id: 'social',
        name: '社交通讯',
        icon: '💬',
        description: '即时通讯与社交工具'
    },
    {
        id: 'utility',
        name: '实用工具',
        icon: '🛠️',
        description: '日常实用软件工具'
    },
    {
        id: 'security',
        name: '安全防护',
        icon: '🛡️',
        description: '杀毒防护隐私保护'
    },
    {
        id: 'meeting',
        name: '会议远程',
        icon: '📹',
        description: '视频会议与远程协作'
    },
    {
        id: 'cleanup',
        name: '垃圾清理',
        icon: '🧹',
        description: '系统清理与优化'
    },
    {
        id: 'design',
        name: '设计创意',
        icon: '🎨',
        description: '图像设计与创意工具'
    },
    {
        id: 'ai',
        name: '辅助AI',
        icon: '🤖',
        description: '人工智能辅助工具'
    },
    {
        id: 'system',
        name: '系统软件',
        icon: '⚙️',
        description: '系统优化与维护'
    }
];
const softwareList = [
    // 效率办公
    {
        id: 'xyai',
        name: '鲜艺AI抠图',
        description: '免费的离线AI抠图工具',
        category: 'office',
        icon: '✂️',
        website: 'https://kt.94xy.com/',
        windowsUrl: 'https://kt.94xy.com/',
        tags: [
            'AI',
            '抠图',
            '图像处理',
            '免费'
        ],
        popular: true
    },
    {
        id: 'pdfgear',
        name: 'PDFgear',
        description: '免费全能PDF工具',
        category: 'office',
        icon: '📄',
        website: 'https://www.pdfgear.com/zh/',
        windowsUrl: 'https://www.pdfgear.com/zh/',
        macUrl: 'https://www.pdfgear.com/zh/pdfgear-for-mac/',
        tags: [
            'PDF',
            '办公'
        ],
        popular: true
    },
    {
        id: 'pdf24',
        name: 'PDF24',
        description: '免费PDF工具箱',
        category: 'office',
        icon: '📑',
        website: 'https://tools.pdf24.org/zh',
        windowsUrl: 'https://tools.pdf24.org/zh/creator',
        tags: [
            'PDF',
            '工具箱'
        ]
    },
    {
        id: 'wps',
        name: 'WPS Office',
        description: '国产免费办公软件套件',
        category: 'office',
        icon: '📊',
        website: 'https://www.wps.cn/',
        windowsUrl: 'https://www.wps.cn/',
        macUrl: 'https://mac.wps.cn/',
        tags: [
            '办公',
            '文档',
            '表格',
            '演示',
            '国产'
        ],
        popular: true
    },
    {
        id: 'pdfcraft',
        name: 'PDFCraft',
        description: '免费在线PDF工具集合',
        category: 'office',
        icon: '🛠️',
        website: 'https://pdfcraft.devtoolcafe.com/zh/tools/',
        windowsUrl: 'https://pdfcraft.devtoolcafe.com/zh/tools/',
        tags: [
            'PDF',
            '在线工具',
            '免费'
        ]
    },
    {
        id: 'office2025',
        name: 'Microsoft Office',
        description: '微软官方办公软件套件集合',
        category: 'office',
        icon: '📦',
        website: 'https://199998.xyz/xb21cn_office/office_xb21cn_2025',
        windowsUrl: 'https://199998.xyz/xb21cn_office/office_xb21cn_2025',
        tags: [
            'Office',
            '微软',
            '办公',
            '文档',
            '表格',
            '演示'
        ],
        popular: true
    },
    // 影音娱乐
    {
        id: 'iqiyiPlayer',
        name: '爱奇艺万能播放器',
        description: '爱奇艺官方视频播放器',
        category: 'utility',
        icon: '🎬',
        website: 'https://www.iqiyi.com/appstore.html#block-SA',
        windowsUrl: 'https://www.iqiyi.com/appstore.html#block-SA',
        tags: [
            '播放器',
            '视频',
            '国产'
        ]
    },
    {
        id: 'qqPlayer',
        name: 'QQ播放器',
        description: '腾讯官方视频播放器',
        category: 'utility',
        icon: '▶️',
        website: 'https://player.qq.com/',
        windowsUrl: 'https://player.qq.com/',
        macUrl: 'https://player.qq.com/',
        tags: [
            '播放器',
            '视频',
            '国产'
        ]
    },
    {
        id: 'vlc',
        name: 'VLC播放器',
        description: '万能开源媒体播放器',
        category: 'utility',
        icon: '🎵',
        website: 'https://www.videolan.org/vlc/',
        windowsUrl: 'https://www.videolan.org/vlc/download-windows.html',
        macUrl: 'https://www.videolan.org/vlc/download-macosx.html',
        tags: [
            '播放器',
            '视频',
            '音频',
            '开源'
        ],
        popular: true
    },
    {
        id: 'qqMusic',
        name: 'QQ音乐',
        description: '腾讯官方音乐平台',
        category: 'media',
        icon: '🎶',
        website: 'https://y.qq.com/',
        windowsUrl: 'https://y.qq.com/download/download.html',
        macUrl: 'https://y.qq.com/download/download.html',
        tags: [
            '音乐',
            '国产'
        ]
    },
    {
        id: 'neteaseMusic',
        name: '网易云音乐',
        description: '网易官方音乐平台',
        category: 'media',
        icon: '☁️',
        website: 'https://music.163.com/',
        windowsUrl: 'https://music.163.com/#/download',
        macUrl: 'https://music.163.com/#/download',
        tags: [
            '音乐',
            '国产'
        ]
    },
    {
        id: 'tencentVideo',
        name: '腾讯视频',
        description: '腾讯官方视频平台',
        category: 'media',
        icon: '📺',
        website: 'https://v.qq.com/',
        windowsUrl: 'https://v.qq.com/download.html',
        macUrl: 'https://v.qq.com/download.html',
        tags: [
            '视频',
            '国产'
        ]
    },
    {
        id: 'youku',
        name: '优酷视频',
        description: '优酷官方视频平台',
        category: 'media',
        icon: '👖',
        website: 'https://www.youku.com/',
        windowsUrl: 'https://youku.com/product/index',
        macUrl: 'https://youku.com/product/index',
        tags: [
            '视频',
            '国产'
        ]
    },
    {
        id: 'iqiyi',
        name: '爱奇艺',
        description: '爱奇艺官方视频平台',
        category: 'media',
        icon: '🥝',
        website: 'https://www.iqiyi.com/appstore.html#block-SA',
        windowsUrl: 'https://www.iqiyi.com/appstore.html#block-SA',
        macUrl: 'https://www.iqiyi.com/appstore.html#block-SA',
        tags: [
            '视频',
            '国产'
        ]
    },
    {
        id: 'douyin',
        name: '抖音',
        description: '字节跳动短视频平台',
        category: 'media',
        icon: '🎵',
        website: 'https://douyin.com/downloadpage',
        windowsUrl: 'https://douyin.com/downloadpage',
        macUrl: 'https://douyin.com/downloadpage',
        tags: [
            '短视频',
            '国产'
        ]
    },
    {
        id: 'kuaishou',
        name: '快手',
        description: '快手短视频平台',
        category: 'media',
        icon: '⚡',
        website: 'https://www.kuaishou.com/',
        windowsUrl: 'https://www.kuaishou.com/download',
        macUrl: 'https://www.kuaishou.com/download',
        tags: [
            '短视频',
            '国产'
        ]
    },
    {
        id: 'bilibili',
        name: '哔哩哔哩',
        description: 'B站官方客户端，二次元弹幕视频平台',
        category: 'media',
        icon: '📺',
        website: 'https://app.bilibili.com/?spm_id_from=333.1007.0.0',
        windowsUrl: 'https://app.bilibili.com/?spm_id_from=333.1007.0.0',
        macUrl: 'https://app.bilibili.com/?spm_id_from=333.1007.0.0',
        tags: [
            '视频',
            '弹幕',
            '二次元',
            '国产'
        ],
        popular: true
    },
    // 社交通讯
    {
        id: 'wechat',
        name: '微信',
        description: '国民级即时通讯软件',
        category: 'social',
        icon: '💬',
        website: 'https://weixin.qq.com/',
        windowsUrl: 'https://pc.weixin.qq.com/',
        macUrl: 'https://mac.weixin.qq.com/',
        tags: [
            '聊天',
            '通讯',
            '国产'
        ],
        popular: true
    },
    {
        id: 'qq',
        name: 'QQ',
        description: '腾讯经典即时通讯工具',
        category: 'social',
        icon: '🐧',
        website: 'https://im.qq.com/',
        windowsUrl: 'https://im.qq.com/pcqq',
        macUrl: 'https://im.qq.com/macqq/',
        tags: [
            '聊天',
            '通讯',
            '国产'
        ]
    },
    {
        id: 'feishu',
        name: '飞书',
        description: '字节跳动企业协作平台',
        category: 'social',
        icon: '📋',
        website: 'https://www.feishu.cn/',
        windowsUrl: 'https://www.feishu.cn/download',
        macUrl: 'https://www.feishu.cn/download',
        tags: [
            '办公',
            '协作',
            '国产'
        ]
    },
    {
        id: 'dingtalk',
        name: '钉钉',
        description: '企业级办公沟通平台',
        category: 'social',
        icon: '🔔',
        website: 'https://www.dingtalk.com/',
        windowsUrl: 'https://www.dingtalk.com/download',
        macUrl: 'https://www.dingtalk.com/download',
        tags: [
            '办公',
            '企业',
            '国产'
        ]
    },
    {
        id: 'wecom',
        name: '企业微信',
        description: '腾讯企业通讯工具',
        category: 'social',
        icon: '🏢',
        website: 'https://work.weixin.qq.com/',
        windowsUrl: 'https://work.weixin.qq.com/#indexDownload',
        macUrl: 'https://work.weixin.qq.com/#indexDownload',
        tags: [
            '办公',
            '企业',
            '国产'
        ]
    },
    // 实用工具
    {
        id: 'winrar',
        name: 'WinRAR',
        description: '经典压缩解压软件',
        category: 'utility',
        icon: '📦',
        website: 'https://www.win-rar.com/',
        windowsUrl: 'https://www.win-rar.com/download.html',
        tags: [
            '压缩',
            '解压'
        ],
        popular: true
    },
    {
        id: '7zip',
        name: '7-Zip',
        description: '开源免费压缩工具',
        category: 'utility',
        icon: '📁',
        website: 'https://www.7-zip.org/',
        windowsUrl: 'https://www.7-zip.org/download.html',
        tags: [
            '压缩',
            '解压',
            '开源'
        ]
    },
    {
        id: 'haoya',
        name: '好压',
        description: '2345出品压缩软件',
        category: 'utility',
        icon: '📂',
        website: 'https://haozip.2345.cc/',
        windowsUrl: 'https://haozip.2345.cc/',
        tags: [
            '压缩',
            '解压',
            '国产'
        ]
    },
    {
        id: '360zip',
        name: '360压缩',
        description: '360出品压缩软件',
        category: 'utility',
        icon: '🗜️',
        website: 'https://yasuo.360.cn/',
        windowsUrl: 'https://yasuo.360.cn/',
        tags: [
            '压缩',
            '解压',
            '国产'
        ]
    },
    {
        id: 'evernote',
        name: 'Evernote',
        description: '知名笔记管理工具',
        category: 'utility',
        icon: '🐘',
        website: 'https://evernote.com/',
        windowsUrl: 'https://evernote.com/download',
        macUrl: 'https://evernote.com/download',
        tags: [
            '笔记',
            '知识管理'
        ]
    },
    {
        id: 'abbyy',
        name: 'ABBYY FineReader',
        description: '专业OCR文字识别软件',
        category: 'utility',
        icon: '📄',
        website: 'https://www.abbyy.com/finereader/',
        windowsUrl: 'https://pdf.abbyy.com/finereader-pdf/',
        macUrl: 'https://pdf.abbyy.com/finereader-pdf-for-mac/',
        tags: [
            'OCR',
            '识别',
            '办公'
        ]
    },
    {
        id: 'formatfactory',
        name: '格式工厂',
        description: '免费多功能格式转换工具',
        category: 'utility',
        icon: '🔄',
        website: 'http://www.pcgeshi.com/',
        windowsUrl: 'http://www.pcgeshi.com/',
        tags: [
            '格式转换',
            '国产'
        ]
    },
    {
        id: 'obs',
        name: 'OBS Studio',
        description: '免费开源直播录屏软件',
        category: 'utility',
        icon: '📹',
        website: 'https://obsproject.com/',
        windowsUrl: 'https://obsproject.com/download',
        macUrl: 'https://obsproject.com/download',
        tags: [
            '录屏',
            '直播',
            '开源'
        ]
    },
    {
        id: 'baiduNetdisk',
        name: '百度网盘',
        description: '百度出品云存储服务',
        category: 'utility',
        icon: '☁️',
        website: 'https://pan.baidu.com/',
        windowsUrl: 'https://pan.baidu.com/download',
        macUrl: 'https://pan.baidu.com/download',
        tags: [
            '网盘',
            '云存储',
            '国产'
        ]
    },
    {
        id: 'aliyunDrive',
        name: '阿里云盘',
        description: '阿里云出品云存储服务',
        category: 'utility',
        icon: '☁️',
        website: 'https://www.aliyundrive.com/',
        windowsUrl: 'https://www.aliyundrive.com/download',
        macUrl: 'https://www.aliyundrive.com/download',
        tags: [
            '网盘',
            '云存储',
            '国产'
        ]
    },
    {
        id: 'sogouInput',
        name: '搜狗输入法',
        description: '搜狗出品智能输入法',
        category: 'utility',
        icon: '⌨️',
        website: 'https://pinyin.sogou.com/',
        windowsUrl: 'https://pinyin.sogou.com/',
        macUrl: 'https://shurufa.sogou.com/mac',
        tags: [
            '输入法',
            '国产'
        ]
    },
    {
        id: 'wechatInput',
        name: '微信输入法',
        description: '微信官方输入法',
        category: 'utility',
        icon: '⌨️',
        website: 'https://z.weixin.qq.com/',
        windowsUrl: 'https://z.weixin.qq.com/',
        macUrl: 'https://z.weixin.qq.com/',
        tags: [
            '输入法',
            '国产'
        ]
    },
    {
        id: 'xunfeiInput',
        name: '讯飞输入法',
        description: '科大讯飞智能输入法',
        category: 'utility',
        icon: '🎤',
        website: 'https://srf.xunfei.cn/',
        windowsUrl: 'https://srf.xunfei.cn/',
        macUrl: 'https://srf.xunfei.cn/#/',
        tags: [
            '输入法',
            '语音',
            '国产'
        ]
    },
    {
        id: 'everything',
        name: 'Everything',
        description: '极速文件搜索工具',
        category: 'utility',
        icon: '🔍',
        website: 'https://www.voidtools.com/',
        windowsUrl: 'https://www.voidtools.com/zh-cn/downloads/',
        tags: [
            '搜索',
            '文件',
            '效率'
        ]
    },
    // 安全防护
    {
        id: '360safe',
        name: '360安全卫士',
        description: '360出品系统安全工具',
        category: 'security',
        icon: '🛡️',
        website: 'https://www.360.cn/',
        windowsUrl: 'https://weishi.360.cn/?package=1__4002016&bd_vid=8782266488004860622',
        macUrl: 'https://www.360.cn/mac/index.html',
        tags: [
            '杀毒',
            '安全',
            '国产'
        ],
        popular: true
    },
    {
        id: 'huorong',
        name: '火绒安全',
        description: '国产轻量级安全软件',
        category: 'security',
        icon: '🔥',
        website: 'https://www.huorong.cn/',
        windowsUrl: 'https://www.huorong.cn/person5.html',
        tags: [
            '杀毒',
            '安全',
            '国产'
        ]
    },
    {
        id: 'tencentManager',
        name: '腾讯安全管家',
        description: '腾讯出品系统安全软件',
        category: 'security',
        icon: '🏠',
        website: 'https://guanjia.qq.com/',
        windowsUrl: 'https://guanjia.qq.com/',
        macUrl: 'https://guanjia.qq.com/main-mac.html',
        tags: [
            '杀毒',
            '安全',
            '国产'
        ]
    },
    // 会议远程
    {
        id: 'tencentMeeting',
        name: '腾讯会议',
        description: '腾讯出品视频会议软件',
        category: 'meeting',
        icon: '📺',
        website: 'https://meeting.tencent.com/',
        windowsUrl: 'https://meeting.tencent.com/download/',
        macUrl: 'https://meeting.tencent.com/download/',
        tags: [
            '视频会议',
            '国产'
        ],
        popular: true
    },
    {
        id: 'zoom',
        name: 'Zoom',
        description: '视频会议与在线协作平台',
        category: 'meeting',
        icon: '📹',
        website: 'https://zoom.us/',
        windowsUrl: 'https://support.zoom.com/hc/zh/article?id=zm_kb&sysparm_article=KB0060422',
        macUrl: 'https://support.zoom.com/hc/zh/article?id=zm_kb&sysparm_article=KB0060422',
        tags: [
            '视频会议',
            '办公',
            '协作'
        ]
    },
    {
        id: 'teams',
        name: 'Microsoft Teams',
        description: '微软出品团队协作平台',
        category: 'meeting',
        icon: '👥',
        website: 'https://www.microsoft.com/microsoft-teams/',
        windowsUrl: 'https://www.microsoft.com/microsoft-teams/download-app',
        tags: [
            '视频会议',
            '协作',
            '微软'
        ]
    },
    {
        id: 'sunlogin',
        name: '向日葵',
        description: '国产远程控制软件',
        category: 'meeting',
        icon: '🌻',
        website: 'https://sunlogin.oray.com/',
        windowsUrl: 'https://sunlogin.oray.com/download/',
        macUrl: 'https://sunlogin.oray.com/download/',
        tags: [
            '远程控制',
            '国产'
        ]
    },
    {
        id: 'todesk',
        name: 'ToDesk',
        description: '国产远程桌面软件',
        category: 'meeting',
        icon: '🖥️',
        website: 'https://www.todesk.com/',
        windowsUrl: 'https://www.todesk.com/download.html',
        macUrl: 'https://www.todesk.com/download.html',
        tags: [
            '远程控制',
            '国产'
        ]
    },
    // 垃圾清理
    {
        id: 'ccleaner',
        name: 'CCleaner',
        description: '经典系统清理工具',
        category: 'cleanup',
        icon: '🧹',
        website: 'https://www.ccleaner.com/',
        windowsUrl: 'https://www.ccleaner.com/ccleaner/download',
        tags: [
            '清理',
            '优化'
        ],
        popular: true
    },
    {
        id: '360safeCleanup',
        name: '360安全卫士',
        description: '360出品系统清理工具',
        category: 'cleanup',
        icon: '🛡️',
        website: 'https://www.360.cn/',
        windowsUrl: 'https://www.360.cn/',
        tags: [
            '清理',
            '安全',
            '国产'
        ]
    },
    {
        id: 'huorongCleanup',
        name: '火绒安全',
        description: '火绒出品系统清理工具',
        category: 'cleanup',
        icon: '🔥',
        website: 'https://www.huorong.cn/',
        windowsUrl: 'https://www.huorong.cn/person5.html',
        tags: [
            '清理',
            '安全',
            '国产'
        ]
    },
    {
        id: 'tencentCleanup',
        name: '腾讯安全管家',
        description: '腾讯出品系统清理工具',
        category: 'cleanup',
        icon: '🏠',
        website: 'https://guanjia.qq.com/',
        windowsUrl: 'https://guanjia.qq.com/',
        tags: [
            '清理',
            '安全',
            '国产'
        ]
    },
    // 设计创意
    {
        id: 'canva',
        name: 'Canva',
        description: '在线平面设计工具',
        category: 'design',
        icon: '🖼️',
        website: 'https://www.canva.com/',
        tags: [
            '设计',
            '平面',
            '在线'
        ],
        popular: true
    },
    {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        description: '专业图像编辑软件',
        category: 'design',
        icon: '🎨',
        website: 'https://www.adobe.com/products/photoshop.html',
        windowsUrl: 'https://www.adobe.com/products/photoshop.html',
        macUrl: 'https://www.adobe.com/products/photoshop.html',
        tags: [
            '图像',
            '设计',
            '专业'
        ]
    },
    {
        id: 'meitu',
        name: '美图秀秀',
        description: '国产图片处理软件',
        category: 'design',
        icon: '✨',
        website: 'https://pc.meitu.com/',
        windowsUrl: 'https://pc.meitu.com/',
        tags: [
            '图像',
            '美颜',
            '国产'
        ]
    },
    // 辅助AI
    {
        id: 'doubao',
        name: '豆包',
        description: '字节跳动AI助手',
        category: 'ai',
        icon: '📦',
        website: 'https://www.doubao.com/',
        tags: [
            'AI',
            '对话',
            '国产'
        ],
        popular: true
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        description: '国产深度求索AI助手',
        category: 'ai',
        icon: '🔮',
        website: 'https://www.deepseek.com/',
        tags: [
            'AI',
            '对话',
            '国产'
        ]
    },
    {
        id: 'tongyi',
        name: '千问',
        description: '阿里云AI大模型',
        category: 'ai',
        icon: '☁️',
        website: 'https://tongyi.aliyun.com/',
        tags: [
            'AI',
            '对话',
            '国产'
        ]
    },
    {
        id: 'kimi',
        name: 'Kimi',
        description: '月之暗面AI助手',
        category: 'ai',
        icon: '🌙',
        website: 'https://kimi.moonshot.cn/',
        tags: [
            'AI',
            '对话',
            '国产'
        ]
    },
    {
        id: 'yuanbao',
        name: '元宝',
        description: '腾讯AI助手',
        category: 'ai',
        icon: '💎',
        website: 'https://yuanbao.tencent.com/',
        tags: [
            'AI',
            '对话',
            '国产'
        ]
    },
    // 系统软件
    {
        id: 'windows11',
        name: 'Windows 11',
        description: '微软最新操作系统',
        category: 'system',
        icon: '🪟',
        website: 'https://www.microsoft.com/windows/windows-11',
        windowsUrl: 'https://www.microsoft.com/software-download/windows11',
        tags: [
            '系统',
            '微软'
        ],
        popular: true
    },
    {
        id: 'drivergenius',
        name: '驱动精灵',
        description: '国产驱动管理软件',
        category: 'system',
        icon: '🔧',
        website: 'https://www.drivergenius.com/',
        windowsUrl: 'https://www.drivergenius.com/',
        tags: [
            '驱动',
            '系统',
            '国产'
        ]
    }
];
function getCategoryById(id) {
    return categories.find((category)=>category.id === id);
}
function getSoftwareByCategory(categoryId) {
    return softwareList.filter((software)=>software.category === categoryId);
}
function getPopularSoftware() {
    return softwareList.filter((software)=>software.popular);
}
function getSoftwareById(id) {
    return softwareList.find((software)=>software.id === id);
}
function searchSoftware(query) {
    const lowerQuery = query.toLowerCase();
    return softwareList.filter((software)=>software.name.toLowerCase().includes(lowerQuery) || software.description.toLowerCase().includes(lowerQuery) || software.tags.some((tag)=>tag.toLowerCase().includes(lowerQuery)));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.mjs [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/software.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ShareButton() {
    _s();
    const [showShareMenu, setShowShareMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareButton.useEffect": ()=>{
            const handleClickOutside = {
                "ShareButton.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setShowShareMenu(false);
                    }
                }
            }["ShareButton.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ShareButton.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["ShareButton.useEffect"];
        }
    }["ShareButton.useEffect"], []);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            const input = document.createElement("input");
            input.value = window.location.href;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    const handleShareQQ = ()=>{
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=SafeDownload&desc=发现一个好用的软件下载导航网站`;
        window.open(qqUrl, "qq-share", "width=600,height=500,toolbar=no,menubar=no,scrollbars=yes,resizable=yes");
        setShowShareMenu(false);
    };
    const currentUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
    const wechatQRUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowShareMenu(!showShareMenu),
                className: "w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors",
                "aria-label": "分享",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            showShareMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-xl shadow-lg py-2 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopyLink,
                        className: "w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "w-5 h-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: copied ? "已复制！" : "复制链接"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setHoveredItem('wechat'),
                        onMouseLeave: ()=>setHoveredItem(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "w-5 h-5 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base",
                                        children: "微信分享"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            hoveredItem === 'wechat' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-full top-0 mr-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-52",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900 dark:text-white mb-2",
                                                children: "微信扫一扫分享"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-2 rounded-lg border border-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: wechatQRUrl,
                                                    alt: "微信分享二维码",
                                                    className: "w-40 h-40 mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: "打开微信扫一扫"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-[-6px] top-4 w-3 h-3 bg-white dark:bg-gray-900 border-r border-t border-gray-200 dark:border-gray-700 transform rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setHoveredItem('qq'),
                        onMouseLeave: ()=>setHoveredItem(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShareQQ,
                                className: "w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-secondary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-blue-500",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29.43 2.21 0 6.287.257 6.287-.43 0-.687-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base",
                                        children: "QQ分享"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            hoveredItem === 'qq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-full top-0 mr-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-48",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-900 dark:text-white mb-2",
                                                children: "QQ分享"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "点击后将跳转到QQ分享页面"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center justify-center gap-1 text-blue-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-8 h-8",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29.43 2.21 0 6.287.257 6.287-.43 0-.687-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Header.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Header.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-[-6px] top-4 w-3 h-3 bg-white dark:bg-gray-900 border-r border-t border-gray-200 dark:border-gray-700 transform rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Header.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ShareButton, "ewguU4Y6/IKVFHRua1+nfueC7Rw=");
_c = ShareButton;
function ThemeToggle() {
    _s1();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 初始化时读取 localStorage 中的主题设置
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                setIsDark(savedTheme === "dark");
            } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setIsDark(true);
            }
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors",
        "aria-label": "切换主题",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Header.tsx",
            lineNumber: 177,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Header.tsx",
            lineNumber: 177,
            columnNumber: 47
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Header.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s1(ThemeToggle, "q9ovQTvwIdpxeVii6kJLTuTYpwE=");
_c1 = ThemeToggle;
function Header({ onSearch }) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (e)=>{
        e.preventDefault();
        const query = searchValue.trim();
        if (!query) return;
        if (onSearch) {
            onSearch(query);
        } else {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 glass border-b border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-screen-xl mx-auto px-4 lg:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center shrink-0 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "SafeDownload",
                                width: 160,
                                height: 40,
                                className: "h-9 w-auto object-contain",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            className: "hidden md:flex flex-1 max-w-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full search-glow rounded-full transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        placeholder: "搜索软件...",
                                        value: searchValue,
                                        onChange: (e)=>setSearchValue(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary/80 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].slice(0, 6).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/category/${cat.id}`,
                                    className: "px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                                    children: cat.name
                                }, cat.id, false, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShareButton, {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors",
                                    "aria-label": "菜单",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 252,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 252,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        placeholder: "搜索软件...",
                                        value: searchValue,
                                        onChange: (e)=>setSearchValue(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/category/${cat.id}`,
                                    onClick: ()=>setMobileMenuOpen(false),
                                    className: "flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: cat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/src/app/components/Header.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Header.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s2(Header, "wkqQWv5vt0tOcxnqrxPH6FKXosg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ShareButton");
__turbopack_context__.k.register(_c1, "ThemeToggle");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/software.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const rotatingWords = [
    "安全",
    "快速",
    "纯净",
    "放心"
];
// 文字高亮颜色配置
const wordStyles = {
    "安全": {
        bg: "from-emerald-500/20 to-teal-500/20",
        text: "text-emerald-600 dark:text-emerald-400",
        shadow: "shadow-emerald-500/30"
    },
    "快速": {
        bg: "from-blue-500/20 to-cyan-500/20",
        text: "text-blue-600 dark:text-blue-400",
        shadow: "shadow-blue-500/30"
    },
    "纯净": {
        bg: "from-violet-500/20 to-purple-500/20",
        text: "text-violet-600 dark:text-violet-400",
        shadow: "shadow-violet-500/30"
    },
    "放心": {
        bg: "from-amber-500/20 to-orange-500/20",
        text: "text-amber-600 dark:text-amber-400",
        shadow: "shadow-amber-500/30"
    }
};
function HeroSection({ onSearch }) {
    _s();
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>{
                    setCurrentWord({
                        "HeroSection.useEffect.interval": (prev)=>(prev + 1) % rotatingWords.length
                    }["HeroSection.useEffect.interval"]);
                }
            }["HeroSection.useEffect.interval"], 2000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (onSearch && searchValue.trim()) {
            onSearch(searchValue.trim());
        }
    };
    const stats = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            value: "50+",
            label: "安全软件"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            value: "100%",
            label: "官网链接"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            value: "0",
            label: "捆绑软件"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            value: "100%",
            label: "免费使用"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative overflow-hidden scroll-mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-screen-xl mx-auto px-4 lg:px-6 pt-16 pb-8 md:pt-24 md:pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-5xl lg:text-6xl font-black tracking-tight whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "让软件下载更"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/HeroSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block min-w-[4ch] text-3xl md:text-5xl lg:text-6xl px-3 py-1 rounded-2xl bg-gradient-to-r ${wordStyles[rotatingWords[currentWord]].bg} ${wordStyles[rotatingWords[currentWord]].text} shadow-lg ${wordStyles[rotatingWords[currentWord]].shadow} animate-word-highlight`,
                                            children: rotatingWords[currentWord]
                                        }, rotatingWords[currentWord], false, {
                                            fileName: "[project]/src/app/components/HeroSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/HeroSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed",
                                    children: [
                                        "汇集常用软件官方下载地址，远离捆绑安装和病毒木马",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/HeroSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        "让每一个人都能安全、放心地下载软件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/HeroSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/HeroSection.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSearch,
                            className: "w-full max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group search-glow rounded-full transition-all duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-xl opacity-50 group-focus-within:opacity-100 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/HeroSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-2 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5 text-muted-foreground ml-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                placeholder: "搜索软件名称，例如：Chrome、VS Code...",
                                                value: searchValue,
                                                onChange: (e)=>setSearchValue(e.target.value),
                                                className: "flex-1 bg-transparent px-4 py-3 text-base focus:outline-none placeholder:text-muted-foreground/60"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn-shine px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity",
                                                children: "搜索"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/HeroSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/HeroSection.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-4xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].slice(0, 5).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/category/${cat.id}`,
                                        className: "group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-500 card-hover",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl icon-float",
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                children: cat.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/src/app/components/HeroSection.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/HeroSection.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10",
                                children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-primary",
                                                children: stat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl md:text-3xl font-black gradient-text",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs md:text-sm text-muted-foreground font-medium",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/components/HeroSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/HeroSection.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-bounce",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                className: "w-5 h-5 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HeroSection.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/HeroSection.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/HeroSection.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/HeroSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/HeroSection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "Ge3AlNzAku+oACRpkzxM1O4T9SQ=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/CategorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/software.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function CategorySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "categories",
        className: "py-8 md:py-10 bg-background scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 lg:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "按分类浏览"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CategorySection.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-muted-foreground",
                            children: "找到你需要的软件类型"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CategorySection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/CategorySection.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/category/${cat.id}/`,
                            className: "group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-500 card-hover",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-purple-500/10 flex items-center justify-center text-3xl icon-float shadow-sm group-hover:shadow-md transition-shadow",
                                    children: cat.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CategorySection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CategorySection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: cat.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CategorySection.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/CategorySection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.id, true, {
                            fileName: "[project]/src/app/components/CategorySection.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/CategorySection.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/CategorySection.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/CategorySection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CategorySection;
var _c;
__turbopack_context__.k.register(_c, "CategorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SoftwareCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoftwareCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.mjs [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/apple.mjs [app-client] (ecmascript) <export default as Apple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// 预检查图标是否存在（支持 PNG 和 SVG）
function useIconPath(id) {
    _s();
    const [iconPath, setIconPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIconPath.useEffect": ()=>{
            // 先检查 PNG，再检查 SVG
            const pngPath = `/icons/${id}.png`;
            const svgPath = `/icons/${id}.svg`;
            // 尝试加载 PNG
            const img = new window.Image();
            img.onload = ({
                "useIconPath.useEffect": ()=>{
                    setIconPath(pngPath);
                    setChecked(true);
                }
            })["useIconPath.useEffect"];
            img.onerror = ({
                "useIconPath.useEffect": ()=>{
                    // PNG 不存在，尝试 SVG
                    const svgImg = new window.Image();
                    svgImg.onload = ({
                        "useIconPath.useEffect": ()=>{
                            setIconPath(svgPath);
                            setChecked(true);
                        }
                    })["useIconPath.useEffect"];
                    svgImg.onerror = ({
                        "useIconPath.useEffect": ()=>{
                            // 都没有，使用 fallback
                            setIconPath(null);
                            setChecked(true);
                        }
                    })["useIconPath.useEffect"];
                    svgImg.src = svgPath;
                }
            })["useIconPath.useEffect"];
            img.src = pngPath;
        }
    }["useIconPath.useEffect"], [
        id
    ]);
    return {
        iconPath,
        checked
    };
}
_s(useIconPath, "kkiS+/07F+XcCc9VhJAl0YZFuWU=");
function SoftwareCard({ software }) {
    _s1();
    const { iconPath, checked } = useIconPath(software.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col gap-4 p-5 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md card-hover",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-2xl bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center text-3xl shrink-0 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden",
                        children: checked && iconPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: iconPath,
                            alt: software.name,
                            width: 56,
                            height: 56,
                            className: "w-full h-full object-contain p-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoftwareCard.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl",
                            children: software.icon
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoftwareCard.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg text-foreground group-hover:text-primary transition-colors",
                                children: software.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed",
                                children: software.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-wrap gap-1.5",
                children: software.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground",
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-wrap gap-2 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: software.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm transition-colors min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: "官网"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    software.windowsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: software.windowsUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-colors min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: "Windows"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    software.macUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: software.macUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm transition-colors min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__["Apple"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: "Mac"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoftwareCard.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoftwareCard.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SoftwareCard.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s1(SoftwareCard, "tRrByFlh7nXF4el2PMVNyyMnq4Q=", false, function() {
    return [
        useIconPath
    ];
});
_c = SoftwareCard;
var _c;
__turbopack_context__.k.register(_c, "SoftwareCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SoftwareGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoftwareGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoftwareCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SoftwareCard.tsx [app-client] (ecmascript)");
"use client";
;
;
function SoftwareGrid({ softwares, title, description }) {
    if (softwares.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-lg",
                children: "暂无软件数据"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoftwareGrid.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "popular",
        className: "py-8 md:py-10 bg-secondary/30 scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 lg:px-6",
            children: [
                (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 md:mb-10",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold tracking-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-muted-foreground",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",
                    children: softwares.map((software)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoftwareCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            software: software
                        }, software.id, false, {
                            fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoftwareGrid.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SoftwareGrid.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/SoftwareGrid.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = SoftwareGrid;
var _c;
__turbopack_context__.k.register(_c, "SoftwareGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SafetyBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SafetyBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
function SafetyBanner() {
    const tips = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-5 h-5 text-emerald-500"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            title: "认准官网",
            description: "始终从软件官方网站下载，避免第三方下载站"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "w-5 h-5 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            title: "警惕捆绑",
            description: "安装时仔细阅读每一步，取消勾选额外软件"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                className: "w-5 h-5 text-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            title: "校验文件",
            description: "大文件建议核对官网提供的 MD5/SHA 校验值"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                className: "w-5 h-5 text-purple-500"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            title: "检查链接",
            description: "确认网址是官方域名，注意拼写相似的钓鱼网站"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "safety",
        className: "py-8 md:py-10 bg-background scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 lg:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "安全下载提示"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SafetyBanner.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-muted-foreground",
                            children: "遵循这些建议，保护你的电脑安全"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SafetyBanner.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#feedback",
                        className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "向下滚动查看留言反馈"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SafetyBanner.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto",
                    children: tips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group p-4 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-primary/30 shadow-sm hover:shadow-md card-hover",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0",
                                            children: tip.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: tip.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground leading-relaxed",
                                    children: tip.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/SafetyBanner.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SafetyBanner.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SafetyBanner.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/SafetyBanner.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = SafetyBanner;
var _c;
__turbopack_context__.k.register(_c, "SafetyBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/FeedbackSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedbackSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.mjs [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// TODO: 部署后替换为腾讯云云函数地址
// 格式：https://service-xxx-xxx.gz.apigw.tencentcs.com/release/waline-server
const WALINE_SERVER_URL = "https://waline-demo.vercel.app";
function FeedbackSection() {
    _s();
    const walineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeedbackSection.useEffect": ()=>{
        // Waline 评论系统暂时禁用，等待国内可访问的后端部署
        // TODO: 部署后启用
        /*
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
    */ }
    }["FeedbackSection.useEffect"], []);
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            title: "软件推荐",
            desc: "推荐好用的软件"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            title: "问题反馈",
            desc: "链接失效或错误"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            title: "使用感受",
            desc: "分享你的想法"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "feedback",
        className: "py-10 md:py-12 bg-gradient-to-b from-background via-secondary/20 to-secondary/30 scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 lg:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold tracking-tight",
                                        children: "留言反馈"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground max-w-lg mx-auto",
                                children: "有软件推荐？发现链接失效？或者只是想打个招呼？欢迎留下你的想法！"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-3 mb-6",
                        children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: feature.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: [
                                            "· ",
                                            feature.desc
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-4 md:p-6 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: walineRef,
                            className: "text-center py-8 text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "w-12 h-12 mx-auto mb-3 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "评论系统升级中，敬请期待..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FeedbackSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FeedbackSection.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FeedbackSection.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/FeedbackSection.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/FeedbackSection.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/FeedbackSection.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(FeedbackSection, "A/2PI1d9itn8Y4c7oVrc3dlLXug=");
_c = FeedbackSection;
var _c;
__turbopack_context__.k.register(_c, "FeedbackSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border/50 bg-secondary/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 lg:px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2.5 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "SafeDownload",
                                        width: 160,
                                        height: 40,
                                        className: "h-9 w-auto object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground leading-relaxed max-w-xs",
                                    children: "致力于为用户提供安全、纯净的软件下载导航服务，让每一个人都能远离捆绑软件和病毒木马。"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-4",
                                    children: "快速链接"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                                children: "首页"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/category/office",
                                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                                children: "办公软件"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/category/security",
                                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                                children: "安全工具"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#feedback",
                                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                                children: "留言反馈"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-4",
                                    children: "免责声明"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground leading-relaxed",
                                    children: "本站仅提供软件官方下载链接导航，所有软件版权归原开发者所有。 下载前请仔细阅读软件许可协议，使用软件时请遵守相关法律法规。"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground flex items-center gap-1",
                            children: [
                                "Made with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-3.5 h-3.5 text-red-500 fill-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 23
                                }, this),
                                " for safer downloads"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                "GitHub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CategorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CategorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoftwareGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SoftwareGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SafetyBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SafetyBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FeedbackSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/FeedbackSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/software.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const popularSoftware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$software$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPopularSoftware"])();
    const currentSectionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isScrolling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 五个区域的 id
    const sectionIds = [
        "hero",
        "categories",
        "popular",
        "safety",
        "feedback"
    ];
    const scrollToSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[scrollToSection]": (index)=>{
            // 允许自由滚动到 Footer 区域（index 超出范围时不拦截，直接返回）
            if (index < 0) return;
            isScrolling.current = true;
            currentSectionIndex.current = index;
            // 如果索引在 sectionIds 范围内，滚动到对应区域
            if (index < sectionIds.length) {
                const targetId = sectionIds[index];
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
            // 800ms 冷却时间，防止连续触发
            setTimeout({
                "Home.useCallback[scrollToSection]": ()=>{
                    isScrolling.current = false;
                }
            }["Home.useCallback[scrollToSection]"], 800);
        }
    }["Home.useCallback[scrollToSection]"], [
        sectionIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleWheel = {
                "Home.useEffect.handleWheel": (e)=>{
                    // 如果在输入框或文本域内，不拦截
                    const target = e.target;
                    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                        return;
                    }
                    // 如果在可滚动容器内（如分类卡片的横向滚动），不拦截
                    const scrollableParent = target.closest("[data-scrollable], .overflow-x-auto, .overflow-y-auto");
                    if (scrollableParent) {
                        const el = scrollableParent;
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
                }
            }["Home.useEffect.handleWheel"];
            window.addEventListener("wheel", handleWheel, {
                passive: false
            });
            return ({
                "Home.useEffect": ()=>window.removeEventListener("wheel", handleWheel)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        scrollToSection
    ]);
    // 监听滚动结束，更新当前区域索引
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let timeout;
            const handleScroll = {
                "Home.useEffect.handleScroll": ()=>{
                    clearTimeout(timeout);
                    timeout = setTimeout({
                        "Home.useEffect.handleScroll": ()=>{
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
                        }
                    }["Home.useEffect.handleScroll"], 150);
                }
            }["Home.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Home.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleSearch = (query)=>{
        router.push(`/search?q=${encodeURIComponent(query)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onSearch: handleSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CategorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoftwareGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        softwares: popularSoftware,
                        title: "热门软件",
                        description: "精选常用软件，点击即可前往官网下载"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SafetyBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FeedbackSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(Home, "KRHtCZ7DCunoNvNxUyq3Gg9I+iI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0johx1b._.js.map