import heroVideo from "../assets/hero-hump-yard.mp4";
import hoControl from "../assets/ho-control.jpg";
import hoLocomotive from "../assets/ho-locomotive.jpg";
import wriHeavyTruckChart from "../assets/wri-heavy-truck.png";

export const profile = {
  name: "樊熙来",
  englishName: "FAN XILAI",
  title: "交通运输本科阶段作品集",
  subtitle: "北京交通大学交通运输学院 铁道运输方向本科生",
  summary:
    "我目前的学习与实践主要围绕铁路运输组织、运输优化、绿色交通与交通数据分析展开，这里集中整理了本科阶段较有代表性的课程训练、科研参与与项目实践。",
  statement:
    "我希望在研究生阶段继续沿着交通运输问题导向开展更系统的学习与研究，因此将现阶段的训练路径、方法积累与项目经验做了集中展示。",
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
    "国家级大学生创新创业训练计划项目在研",
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
    type: "科研项目 / 国家级大创在研",
    time: "2025.06 - 至今",
    accent: "编组站作业流程复现 / 机械结构设计 / 实验验证",
    description:
      "围绕编组站驼峰解体作业中的推峰、摘钩与股道分流问题，基于 HO 比例铁路沙盘完成作业流程复现与实验系统搭建。",
    contributions: [
      "参与梳理解体作业流程，将推峰、摘钩、溜放和股道分流转化为可复现的实验逻辑。",
      "参与自动摘钩机构设计与调试，结合沙盘车辆结构完成远程摘钩验证。",
      "围绕不同速度与编组条件开展实验记录，分析作业稳定性与控制响应。",
    ],
    metrics: [
      { label: "项目角色", value: "负责人" },
      { label: "核心流程", value: "5 类" },
      { label: "实验方向", value: "作业协同" },
    ],
    visual: {
      kind: "ho",
      images: [
        { src: hoControl, alt: "沙盘控制与作业平台" },
        { src: hoLocomotive, alt: "自动摘钩机构局部" },
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
      "参与绿色交通与低碳转型方向的资料梳理、指标整理和研究支持工作，重点关注政策文本、行业案例与基础数据。",
    contributions: [
      "整理交通政策、区域案例和行业指标材料，支撑研究资料归集。",
      "参与部分数据收集、清洗与初步整理，增强对交通研究数据处理流程的理解。",
      "协助英文资料阅读与信息归纳，了解国际研究机构项目协作方式。",
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
      "围绕多基地、多角色和连续工作约束下的船员排班问题，建立乘务计划求解模型并完成多组案例计算与校验。",
    contributions: [
      "使用 Python 组织任务链、人员分配、作业时长与工资计算逻辑。",
      "逐步加入连续工作、休息日、角色替代等约束，输出可提交的排班结果。",
      "对多组结果进行校验，检查任务覆盖、成本与约束满足情况。",
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
      "围绕冰面厚度估计、承载力分析与安全范围计算，完成模型建立、参数估计、程序求解和论文整合。",
    contributions: [
      "参与赛题分析、模型构建与程序求解，完成关键假设与参数整理。",
      "结合实际场景对承载力和安全条件进行结果解释与结构化表达。",
      "参与论文撰写与团队协作，完成模型说明与结果整合。",
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
    text: "已完成管理运筹学、综合交通规划与设计、概率论与数理统计、面向对象程序设计等课程训练，具备交通问题分析的基础框架。",
  },
  {
    title: "建模与优化",
    text: "能够围绕运输组织、排班计划和约束求解等问题进行模型抽象，并结合课程和竞赛场景完成求解验证。",
  },
  {
    title: "编程实现",
    text: "能够使用 Python、MATLAB 等工具完成数据处理、模型计算、排班逻辑实现与结果校验。",
  },
  {
    title: "资料整理与分析",
    text: "具备交通政策、案例与研究资料的检索、归纳与结构化整理能力，可配合研究任务完成基础支持工作。",
  },
  {
    title: "学术表达",
    text: "能够完成课程报告、建模论文与项目汇报材料撰写，重视问题背景、方法过程与结果表达的一致性。",
  },
  {
    title: "项目协作",
    text: "在科研项目、课程竞赛与实践活动中承担过推进、整合与沟通工作，能够在团队中持续跟进任务落地。",
  },
];
