import heroVideo from "../assets/hero-hump-yard.mp4";
import hoControl from "../assets/ho-control.jpg";
import hoLocomotive from "../assets/ho-locomotive.jpg";
import wriHeavyTruckChart from "../assets/wri-heavy-truck.png";

export const profile = {
  name: "樊熙来",
  title: "北京交通大学交通运输学院 · 交通运输专业本科生",
  summary:
    "本科阶段主要围绕铁路运输组织、交通运筹优化、绿色交通与交通数据分析开展课程学习、科研训练、竞赛建模和研究支持工作。",
  school: "北京交通大学",
  college: "交通运输学院",
  major: "交通运输专业",
  direction: "铁道运输方向",
  period: "2023.09 至今",
  email: "23251202@bjtu.edu.cn",
  phone: "(+86) 13412273822",
  stats: [
    { value: "3.6 / 4.00", label: "GPA" },
    { value: "23 / 111", label: "专业排名" },
    { value: "14", label: "满绩课程" },
    { value: "6.5", label: "IELTS" },
  ],
  highlights: [
    "大学生创新创业训练国家级项目在研",
    "北京交通大学大学生数学建模竞赛三等奖",
    "学习优秀奖学金、社会实践优秀奖学金",
    "CET-4 577，具备英文文献阅读与资料翻译能力",
  ],
  skills: ["Python", "Java", "MATLAB", "Office", "LaTeX", "数据清洗", "可视化分析", "运筹优化建模"],
  heroVideo,
};

export const projects = [
  {
    title: "HO 比例沙盘编组站智能推峰-摘钩协同作业系统研究与实现",
    type: "科研项目 / 国家级大创在研",
    time: "2025.06 至今",
    accent: "铁路编组站 · 驼峰解体作业 · 沙盘复现实验",
    visual: {
      kind: "ho",
      images: [
        { src: hoControl, alt: "沙盘控制一体化平台界面" },
        { src: hoLocomotive, alt: "自动摘钩机构内部结构" },
      ],
    },
    description:
      "项目面向铁路编组站驼峰解体作业中的推峰控速、摘钩时机和股道分流协同问题，基于 HO 比例铁路沙盘搭建可演示、可联调的作业复现系统。",
    contributions: [
      "参与梳理驼峰解体作业流程，将钩计划、推峰、摘钩、溜放和道岔分流转化为沙盘实验流程。",
      "参与电磁拨杆式自动摘钩机构设计与调试，结合詹式车钩结构实现远程摘钩。",
      "开展不同车辆编组条件下的推峰速度测试，分析动力档位对车辆通过峰顶平台和摘钩稳定性的影响。",
    ],
    metrics: [
      { label: "摘钩响应", value: "< 1s" },
      { label: "核心流程", value: "5 类" },
      { label: "项目角色", value: "负责人" },
    ],
  },
  {
    title: "世界资源研究所 WRI 交通与低碳研究支持",
    type: "实习经历 / 交通研究支持",
    time: "2025.07 - 2025.10",
    accent: "绿色交通 · 政策梳理 · 数据整理",
    visual: {
      kind: "wri",
      chart: wriHeavyTruckChart,
    },
    description:
      "实习期间参与交通领域文献、政策路线图与行业报告梳理，重点关注绿色交通、城市交通治理、交通减排与可持续出行等方向。",
    contributions: [
      "参与交通政策、城市案例和行业指标资料整理，支持研究材料形成。",
      "负责部分数据采集、清洗与初步分析，提升对交通领域数据处理和政策比较方法的理解。",
      "协助英文资料翻译、对外内容整理和项目归档，了解国际研究机构交通项目协作流程。",
    ],
    metrics: [
      { label: "研究方向", value: "绿色交通" },
      { label: "工作语言", value: "中英" },
      { label: "岗位", value: "实习分析师" },
    ],
  },
  {
    title: "海上风电场运维船队船员乘务计划编制问题",
    type: "管理运筹学课程竞赛",
    time: "2025",
    accent: "乘务计划编制 · 约束建模 · 成本优化",
    visual: {
      kind: "optimization",
      cases: [
        { name: "Case I", cost: "667204.25", check: "0" },
        { name: "Case II", cost: "696555.75", check: "0" },
        { name: "Case III", cost: "1296029.50", check: "0" },
      ],
    },
    description:
      "围绕海上风电场运维任务，建立船员乘务计划求解程序，在多基地、多角色、作业间休、连续工作、休息日和工资均衡等约束下进行排班与成本计算。",
    contributions: [
      "使用 Python 组织任务链、人员分配、作业时间、勤务时间、休息约束和成本计算。",
      "针对三类 Case 逐步加入休息日和连续工作约束，输出可提交的排班结果表。",
      "对工资均衡、角色替代、基地转移和任务覆盖情况进行结果校验。",
    ],
    metrics: [
      { label: "求解 Case", value: "3" },
      { label: "校验警告", value: "0" },
      { label: "主要工具", value: "Python" },
    ],
  },
  {
    title: "北京交通大学大学生数学建模竞赛：冰面承载力与安全范围分析",
    type: "数学建模竞赛 / 三等奖",
    time: "2024.04 - 2024.06",
    accent: "冻冰度日法 · 冰面承载力 · 安全范围计算",
    visual: {
      kind: "modeling",
      steps: ["问题重述", "模型假设", "厚度估计", "承载力分析", "安全范围计算"],
    },
    description:
      "围绕北京颐和园冰场开放期间冰面厚度、安全承载力和洞口附近滑行安全范围等问题，完成模型建立、参数计算、程序求解和论文撰写。",
    contributions: [
      "参与赛题分析、模型构建和程序求解，使用气温数据估计冰层厚度变化。",
      "结合冰面承载力公式分析游客活动和冰车滑行的安全条件。",
      "参与论文撰写与团队统筹，完成结果解释和文档整合。",
    ],
    metrics: [
      { label: "奖项", value: "三等奖" },
      { label: "产出", value: "论文" },
      { label: "角色", value: "负责人" },
    ],
  },
];

export const strengths = [
  {
    title: "交通运输专业基础",
    text: "已完成管理运筹学、综合交通规划与设计、概率论与数理统计、面向对象程序设计等课程训练，具备交通问题建模与分析基础。",
  },
  {
    title: "铁路运输组织理解",
    text: "能够围绕编组站驼峰解体、推峰、摘钩、溜放和道岔分流等环节进行流程抽象与实验复现。",
  },
  {
    title: "运筹优化与程序实现",
    text: "能够使用 Python、MATLAB 等工具完成数据处理、模型计算、排班优化和结果校验。",
  },
  {
    title: "交通数据与政策研究",
    text: "具备交通政策资料梳理、城市案例整理、行业指标分析和英文资料翻译经验。",
  },
  {
    title: "科研表达能力",
    text: "能够完成竞赛论文、研究报告、汇报材料和技术文档撰写，重视模型假设、求解过程与结果解释。",
  },
  {
    title: "项目协作与推进",
    text: "在科研项目、课程竞赛、学院科协和社会实践中承担过项目推进、材料整合和现场协调工作。",
  },
];
