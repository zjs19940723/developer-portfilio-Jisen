// 项目数据 - 周员外
export interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string
  image: string
  color: string // 项目主题色，用于生成图片背景
  icon: string // 项目图标类型
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  company?: string
  period?: string
  highlights?: string[]
  responsibilities?: string[] // 项目职责
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI 超级智能体',
    description: '基于 Spring Boot3 + Spring AI + RAG 的企业级 AI 智能体，支持多轮对话、记忆持久化、知识库检索。',
    fullDescription: '基于 Spring Boot3 + Spring AI + RAG + Tool Calling + MCP 的企业级 AI 智能体。支持多轮对话、记忆持久化、RAG 知识库检索，基于 ReAct 模式自主思考并调用工具完成复杂任务，如利用联网搜索、资源下载和 PDF 生成工具制定完整计划并生成文档。',
    image: '/images/ai-agent.png',
    color: 'from-purple-500 to-cyan-500',
    icon: 'robot',
    technologies: ['Spring Boot3', 'Spring AI', 'RAG', 'PGvector', 'Tool Calling', 'MCP', 'Redis', 'MySQL'],
    company: '老鱼公司',
    period: '2023-2024',
    highlights: [
      '接入通义、Ollama 等 5 种 AI 大模型，API 调用成本降低 60%',
      '基于 MySQL + Redis + Kryo 实现记忆持久化，对话恢复率达 99%',
      'RAG 知识库问答准确率相比纯大模型提升 45%',
      '实现联网搜索、PDF生成等 6 种工具调用',
    ],
    responsibilities: [
      '负责 AI 智能体核心架构设计与实现',
      '实现 RAG 知识库的完整流程（文档ETL、向量存储、检索增强）',
      '开发 MCP Server 实现 SSE 和 Stdio 双传输模式',
      '设计分层智能体架构，支持 Human-in-the-Loop',
    ]
  },
  {
    id: 2,
    title: '喔趣考勤 2.0',
    description: '多租户 SaaS 服务平台，支持企业微信、钉钉、飞书集成，实现考勤打卡、排班、审批等功能。',
    fullDescription: '多租户 SaaS 服务平台，支持移动端 App、Web 端及第三方平台集成（企业微信、钉钉、飞书）。实现多种考勤打卡、移动排班、移动审批、数据报表统计等功能。采用 Spring Cloud 微服务架构，支持高并发场景。',
    image: '/images/oq-attendance.png',
    color: 'from-blue-500 to-indigo-500',
    icon: 'calendar',
    technologies: ['Spring Boot', 'Spring Cloud', 'MyBatis-Plus', 'Redis', 'Apollo', 'xxl-job', 'RocketMQ'],
    company: '无锡喔趣信息科技有限公司',
    period: '2021.05-2022.12',
    responsibilities: [
      '负责考勤核心模块开发，实现多种打卡方式',
      '设计多租户架构，实现租户隔离和数据安全',
      '优化高并发场景下的系统性能',
      '对接企业微信、钉钉、飞书第三方平台API',
    ]
  },
  {
    id: 3,
    title: '银行卡质押信用购机',
    description: '为和包提供借款/还款的金融机构平台，支持多渠道还款，采用 DevOps 快速迭代。',
    fullDescription: '为和包提供借款/还款的金融机构平台，实现银行质押、借款、多渠道还款（支付宝、微信、银行卡、和包）。采用 DevOps 快速迭代试错，实现 CI/CD 自动化部署流程。',
    image: '/images/bank-pledge.png',
    color: 'from-green-500 to-emerald-500',
    icon: 'bank',
    technologies: ['Spring Boot', 'Spring Cloud', 'MyBatis-Plus', 'Redis', 'Apollo', 'xxl-job', 'Kafka', 'ELK', 'Prometheus'],
    company: '南京慧明软件有限公司',
    period: '2019.07-2021.05',
    responsibilities: [
      '负责借款和还款核心流程开发',
      '对接支付宝、微信支付等支付渠道',
      '搭建 ELK 日志分析平台',
      '实现 Prometheus + Grafana 监控告警体系',
    ]
  },
  {
    id: 4,
    title: '应急管理平台',
    description: '综合应急管理系统，包括预案中心、演练中心、应急指挥、权限管理等模块。',
    fullDescription: '以监控系统、IT资源管理、自动化系统、工单系统为支撑，对各类资源进行汇集和编排。包括预案中心、演练中心、应急指挥、权限管理等模块。采用 Dubbo 分布式架构，支持大规模数据处理。',
    image: '/images/emergency-manage.png',
    color: 'from-slate-500 to-gray-600',
    icon: 'emergency',
    technologies: ['Spring Boot', 'MySQL', 'Redis', 'Dubbo', 'Zookeeper', 'xxl-job', 'FlyWay'],
    company: '南京慧明软件有限公司',
    period: '2019.07-2021.05',
    responsibilities: [
      '负责预案中心和演练中心模块开发',
      '设计权限管理系统，实现细粒度权限控制',
      '使用 FlyWay 实现数据库版本管理',
      '优化 Dubbo 服务调用性能',
    ]
  },
  {
    id: 5,
    title: '盐都区防汛预报预警平台',
    description: '水务局防汛预警系统，实现地理信息分析、汛情监控、预警预报等功能。',
    fullDescription: '盐都区水务局项目，对地理信息、汛情宏观态势进行合理分析，实现水利信息实时掌控。包括调查评价、数据报表、应急响应、预警预报、视频监控等模块。集成 ArcGIS 地理信息系统，实现可视化展示。',
    image: '/images/flood-warning.png',
    color: 'from-cyan-500 to-blue-500',
    icon: 'water',
    technologies: ['Spring Boot', 'SQL Server', 'MyBatis-Plus', 'Layui', 'ECharts', 'ArcGIS'],
    company: '江苏鸿利智能有限公司',
    period: '2017.10-2019.06',
    responsibilities: [
      '负责预警预报核心算法实现',
      '集成 ArcGIS 实现地理信息可视化',
      '开发视频监控接入模块',
      '设计数据报表统计分析功能',
    ]
  },
  {
    id: 6,
    title: '雨花台区智慧水利',
    description: '智慧水利系统，实现水位雨情监测、汛期数据分析预测、指挥调度等功能。',
    fullDescription: '雨花台区水务局项目，直观反映水位雨情信息，汛期数据分析预测与实时展示，实现指挥调度。包括海康视频接入、水利数据同步、预警预报流程等。使用 inMap 实现大屏可视化展示。',
    image: '/images/smart-water.png',
    color: 'from-teal-500 to-green-500',
    icon: 'dam',
    technologies: ['Spring Boot', 'MySQL', 'MyBatis-Plus', 'Layui', 'ArcGIS', 'inMap', '海康SDK'],
    company: '江苏鸿利智能有限公司',
    period: '2017.10-2019.06',
    responsibilities: [
      '负责水位雨情数据采集和分析',
      '集成海康SDK实现视频监控',
      '开发预警预报流程自动化',
      '设计大屏可视化展示系统',
    ]
  },
]

// 获取所有项目
export const getAllProjects = (): Project[] => {
  return projects
}

// 根据 ID 获取项目
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id)
}