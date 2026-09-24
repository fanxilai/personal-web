import heroVideo from "../assets/hero-hump-yard.mp4";
import hoPart from "../assets/ho-part.png";
import hoSpeedData from "../assets/ho-speed-data.png";
import hoSceneTrack from "../assets/ho-scene-track.png";
import hoSceneSandbox from "../assets/ho-scene-sandbox.png";
import wriHeavyTruckChart from "../assets/wri-heavy-truck.png";

export const profile = {
  name: "樊熙来",
  englishName: "FAN XILAI",
  title: "交通运输方向学习与实践",
  subtitle: "北京交通大学交通运输学院本科生 · 已保研至中山大学智能工程学院交通运输硕士",
  summary:
    "我的学习与实践主要围绕运筹优化、人工智能与数据分析展开，关注如何用建模与算法解决真实世界的复杂决策问题。",
  statement:
    "已保研至中山大学智能工程学院交通运输硕士（2027 年入学），对运筹优化与人工智能方向保持持续兴趣，希望用建模与算法解决复杂系统中的优化与决策问题。",
  school: "北京交通大学",
  college: "交通运输学院",
  major: "交通运输",
  direction: "铁道运输方向",
  period: "2023.09 - 2027.07",
  email: "ffanxilaii@outlook.com/ffanxilaii@163.com",
  phone: "(+86) 13412273822",
  heroVideo,
  researchInterests: ["运筹优化与建模", "人工智能与机器学习", "数据分析", "智能决策"],
  stats: [
    { value: "3.6 / 4.0", label: "GPA" },
    { value: "23 / 111", label: "专业排名" },
    { value: "19", label: "满绩课程" },
    { value: "6.5 / 576", label: "IELTS / CET-4" },
  ],
  highlights: [
    "国家级大学生创新创业训练计划项目负责人",
    "北京交通大学大学生数学建模竞赛三等奖（项目主要负责人）",
    "世界资源研究所 WRI 交通与低碳方向实习分析师",
    "获学习优秀奖学金、社会实践优秀奖学金",
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
    time: "2025.06 - 2026.05",
    accent: "后端服务开发 / 摘钩机构设计 / 推峰速度测试",
    description:
      "针对铁路编组站驼峰解体作业中推峰控速、摘钩时机与股道分流的协同难题，基于 HO 比例沙盘搭建智能推峰—协同摘钩复现系统，覆盖钩计划执行、峰顶摘钩、溜放控制等典型调车场景。",
    contributions: [
      "开发内网 Web 服务，实现机车调速、道岔控制、摘钩触发三类 API。",
      "设计电拨杆式自动摘钩机构，结合詹式车钩实现远程摘钩，响应时间小于 1 秒。",
      "开展推峰速度测试，确定单推单溜、双推单溜场景的推荐推峰速度。",
      "抽象“钩计划—推峰—摘钩—溜放—道岔分流”作业流程为沙盘可复现实验流。",
    ],
    metrics: [
      { label: "项目角色", value: "负责人" },
      { label: "摘钩响应", value: "<1s" },
      { label: "作业流程", value: "5 环节" },
    ],
    visual: {
      kind: "ho",
      images: [
        { src: hoPart, alt: "自动摘钩机构局部" },
        { src: hoSpeedData, alt: "智能调机推峰速度控制实验数据" },
        { src: hoSceneTrack, alt: "HO 比例编组站轨道作业场景" },
        { src: hoSceneSandbox, alt: "HO 比例沙盘全景" },
      ],
    },
  },
  {
    slug: "wri",
    level: "featured",
    title: "世界资源研究所 WRI 交通与低碳研究支持",
    type: "实习经历 / 实习分析师",
    time: "2025.07 - 2025.10",
    accent: "新能源发电 / 保有量预测 / 重卡能耗仿真",
    description:
      "在 WRI 交通与低碳方向担任实习分析师，参与风光发电、乘用车保有量与重卡电动化等量化研究支持。",
    contributions: [
      "整理北京、哈密、鄂尔多斯等 8 个城市逐小时风电/光伏出力数据，支撑新能源发电评估。",
      "基于 Gompertz 模型结合 SSP2 情景，预测中国乘用车千人保有量至 2060 年。",
      "基于 FASTSim 构建 6X4 牵引车 ICEV/BEV 能耗模型，对比主流电动重卡能耗表现。",
      "协助英文资料翻译、国际会议记录与沟通材料整理。",
    ],
    metrics: [
      { label: "实习岗位", value: "实习分析师" },
      { label: "工作语言", value: "中英双语" },
      { label: "研究主题", value: "新能源与低碳" },
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
    text: "管理运筹学、概率论与数理统计、综合交通规划与设计等 19 门核心课程满绩，具备扎实的数理与交通分析基础。",
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
