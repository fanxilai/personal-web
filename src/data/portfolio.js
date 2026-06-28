import heroVideo from "../assets/hero-hump-yard.mp4";
import hoLocomotive from "../assets/ho-locomotive.jpg";
import hoSpeedAnalysis from "../assets/ho-speed-analysis.png";
import wriHeavyTruckChart from "../assets/wri-heavy-truck.png";

export const profile = {
  name: "樊熙来",
  englishName: "FAN XILAI",
  title: "交通运输本科阶段作品集",
  subtitle: "北京交通大学交通运输学院 铁道运输方向本科生",
  summary:
    "我的学习与实践主要聚焦铁路运输组织、运输优化、绿色交通与交通数据分析。",
  statement:
    "希望在研究生阶段继续开展交通运输领域的系统学习与研究。",
  school: "北京交通大学",
  college: "交通运输学院",
  major: "交通运输",
  direction: "铁道运输方向",
  period: "2023.09 - 至今",
  email: "23251202@bjtu.edu.cn",
  phone: "(+86) 13412273822",
  heroVideo,
  researchInterests: ["铁路运输组织", "运输优化与建模", "绿色交通", "交通数据分析"],
  stats: [
    { value: "3.6 / 4.0", label: "GPA" },
    { value: "23 / 111", label: "专业排名" },
    { value: "14", label: "满绩课程" },
    { value: "6.5", label: "IELTS" },
  ],
  highlights: [
    "大学生创新创业训练计划项目获评国家级",
    "北京交通大学大学生数学建模竞赛三等奖",
    "世界资源研究所 WRI 交通与低碳方向研究支持经历",
    "具备中英文资料检索、阅读、整理与基础分析能力",
  ],
  methods: ["Python", "MATLAB", "Java", "LaTeX", "Office", "数据整理", "可视化分析", "运筹优化"],
};

export const projects = [
  {
    slug: "ho-yard",
    level: "featured",
    title: "HO 比例编组站推峰与摘钩协同作业系统研究",
    type: "科研项目 / 国家级大学生创新创业训练计划项目",
    time: "2025.06 - 已结项",
    accent: "编组站作业流程复现 / 机械结构设计 / 实验验证",
    description:
      "围绕驼峰解体作业中的推峰、摘钩与股道分流，基于 HO 比例沙盘搭建作业复现与实验系统。",
    contributions: [
      "梳理解体流程，构建推峰、摘钩、溜放与分流实验逻辑。",
      "参与自动摘钩机构设计与调试，完成远程摘钩验证。",
      "开展速度与编组实验，分析作业稳定性与控制响应。",
    ],
    metrics: [
      { label: "项目角色", value: "负责人" },
      { label: "核心流程", value: "5 类" },
      { label: "实验方向", value: "作业协同" },
    ],
    visual: {
      kind: "ho",
      images: [
        { src: hoLocomotive, alt: "自动摘钩机构局部" },
        { src: hoSpeedAnalysis, alt: "智能调机推峰速度控制实验数据" },
      ],
    },
  },
  {
    slug: "wri",
    level: "featured",
    title: "世界资源研究所 WRI 交通与低碳研究支持",
    type: "研究支持 / 实习经历",
    time: "2025.07 - 2025.10",
    accent: "政策梳理 / 数据整理 / 绿色交通议题",
    description:
      "参与绿色交通与低碳转型研究支持，整理政策文本、行业案例与基础数据。",
    contributions: [
      "整理交通政策、区域案例和行业指标。",
      "参与数据收集、清洗与初步分析。",
      "协助英文资料阅读、归纳与项目归档。",
    ],
    metrics: [
      { label: "研究主题", value: "绿色交通" },
      { label: "工作语言", value: "中英双语" },
      { label: "工作方式", value: "资料与数据支持" },
    ],
    visual: {
      kind: "wri",
      chart: wriHeavyTruckChart,
    },
  },
  {
    slug: "crew-scheduling",
    level: "compact",
    title: "海上风电场运维船队船员乘务计划编制问题",
    type: "课程竞赛 / 管理运筹学",
    time: "2025",
    accent: "约束建模 / 成本优化 / 程序求解",
    description:
      "针对多基地、多角色和连续工作约束，建立船员乘务计划模型并完成案例校验。",
    contributions: [
      "使用 Python 实现任务链、人员分配与成本计算。",
      "加入连续工作、休息日和角色替代约束。",
      "校验任务覆盖、成本与约束满足情况。",
    ],
    metrics: [
      { label: "求解案例", value: "3" },
      { label: "校验警告", value: "0" },
      { label: "主要工具", value: "Python" },
    ],
    visual: {
      kind: "optimization",
      cases: [
        { name: "Case I", cost: "667204.25", check: "0" },
        { name: "Case II", cost: "696555.75", check: "0" },
        { name: "Case III", cost: "1296029.50", check: "0" },
      ],
    },
  },
  {
    slug: "modeling",
    level: "compact",
    title: "北京交通大学大学生数学建模竞赛：冰面承载力与安全范围分析",
    type: "数学建模竞赛 / 三等奖",
    time: "2024.04 - 2024.06",
    accent: "问题分析 / 模型建立 / 论文写作",
    description:
      "围绕冰面厚度、承载力与安全范围，完成建模、求解和论文整合。",
    contributions: [
      "参与赛题分析、模型构建与程序求解。",
      "解释承载力与安全条件计算结果。",
      "参与论文撰写与结果整合。",
    ],
    metrics: [
      { label: "奖项", value: "三等奖" },
      { label: "产出形式", value: "论文" },
      { label: "参与角色", value: "建模与写作" },
    ],
    visual: {
      kind: "modeling",
      steps: ["问题重述", "模型假设", "参数估计", "结果计算", "论文整合"],
    },
  },
];

export const capabilities = [
  {
    title: "课程基础",
    text: "完成管理运筹学、综合交通规划与设计、概率论与数理统计等课程，具备交通问题分析基础。",
  },
  {
    title: "建模与优化",
    text: "能够对运输组织、排班计划等问题进行模型抽象、求解与验证。",
  },
  {
    title: "编程实现",
    text: "使用 Python、MATLAB 完成数据处理、模型计算与结果校验。",
  },
  {
    title: "资料整理与分析",
    text: "能够检索、归纳交通政策、案例与研究资料，支持基础分析。",
  },
  {
    title: "学术表达",
    text: "能够撰写课程报告、建模论文与项目汇报材料。",
  },
  {
    title: "项目协作",
    text: "具备项目推进、材料整合与团队沟通经验。",
  },
];
