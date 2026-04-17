// 项目数据 - 周员外
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  company?: string
  period?: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI 超级智能体',
    description: '基于 Spring Boot3 + Spring AI + RAG + Tool Calling + MCP 的企业级 AI 智能体。支持多轮对话、记忆持久化、RAG 知识库检索，基于 ReAct 模式自主思考并调用工具完成复杂任务。',
    image: '/images/ai-agent.png',
    technologies: ['Spring Boot3', 'Spring AI', 'RAG', 'PGvector', 'Tool Calling', 'MCP', 'Redis', 'MySQL'],
    demoUrl: 'https://codefather.cn',
    githubUrl: 'https://github.com/liyupi/yu-ai-agent',
    company: '老鱼公司',
    period: '2023-2024',
    highlights: [
      '接入通义、Ollama 等 5 种 AI 大模型，API 调用成本降低 60%',
      '基于 MySQL + Redis + Kryo 实现记忆持久化，对话恢复率达 99%',
      'RAG 知识库问答准确率相比纯大模型提升 45%',
      '实现联网搜索、PDF生成等 6 种工具调用',
    ]
  },
  {
    id: 2,
    title: '喔趣考勤 2.0',
    description: '多租户 SaaS 服务平台，支持移动端 App、Web 端及第三方平台集成（企业微信、钉钉、飞书）。实现多种考勤打卡、移动排班、移动审批、数据报表统计等功能。',
    image: '/images/oq-attendance.png',
    technologies: ['Spring Boot', 'Spring Cloud', 'MyBatis-Plus', 'Redis', 'Apollo', 'xxl-job', 'RocketMQ'],
    company: '无锡喔趣信息科技有限公司',
    period: '2021.05-2022.12'
  },
  {
    id: 3,
    title: '银行卡质押信用购机项目',
    description: '为和包提供借款/还款的金融机构平台，实现银行质押、借款、多渠道还款（支付宝、微信、银行卡、和包）。采用 DevOps 快速迭代试错。',
    image: '/images/bank-pledge.png',
    technologies: ['Spring Boot', 'Spring Cloud', 'MyBatis-Plus', 'Redis', 'Apollo', 'xxl-job', 'Kafka', 'ELK', 'Prometheus'],
    company: '南京慧明软件有限公司',
    period: '2019.07-2021.05'
  },
  {
    id: 4,
    title: '应急管理平台',
    description: '以监控系统、IT资源管理、自动化系统、工单系统为支撑，对各类资源进行汇集和编排。包括预案中心、演练中心、应急指挥、权限管理等模块。',
    image: '/images/emergency-manage.png',
    technologies: ['Spring Boot', 'MySQL', 'Redis', 'Dubbo', 'Zookeeper', 'xxl-job', 'FlyWay'],
    company: '南京慧明软件有限公司',
    period: '2019.07-2021.05'
  },
  {
    id: 5,
    title: '盐都区基层防汛预报预警平台',
    description: '盐都区水务局项目，对地理信息、汛情宏观态势进行合理分析，实现水利信息实时掌控。包括调查评价、数据报表、应急响应、预警预报、视频监控等模块。',
    image: '/images/flood-warning.png',
    technologies: ['Spring Boot', 'SQL Server', 'MyBatis-Plus', 'Layui', 'ECharts', 'ArcGIS'],
    company: '江苏鸿利智能有限公司',
    period: '2017.10-2019.06'
  },
  {
    id: 6,
    title: '雨花台区智慧水利',
    description: '雨花台区水务局项目，直观反映水位雨情信息，汛期数据分析预测与实时展示，实现指挥调度。包括海康视频接入、水利数据同步、预警预报流程等。',
    image: '/images/smart-water.png',
    technologies: ['Spring Boot', 'MySQL', 'MyBatis-Plus', 'Layui', 'ArcGIS', 'inMap', '海康SDK'],
    company: '江苏鸿利智能有限公司',
    period: '2017.10-2019.06'
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