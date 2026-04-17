// 技能数据 - 周建生
export interface Skill {
  name: string
  level: number // 1-5 的熟练程度
  category: 'backend' | 'database' | 'distributed' | 'tools'
}

export const skills: Skill[] = [
  // 后端核心技能
  {
    name: 'Java',
    level: 5,
    category: 'backend'
  },
  {
    name: 'Spring Boot',
    level: 5,
    category: 'backend'
  },
  {
    name: 'Spring Cloud',
    level: 4,
    category: 'backend'
  },
  {
    name: 'MyBatis',
    level: 4,
    category: 'backend'
  },
  {
    name: '设计模式',
    level: 4,
    category: 'backend'
  },
  {
    name: '多线程并发',
    level: 4,
    category: 'backend'
  },

  // 数据库
  {
    name: 'MySQL',
    level: 4,
    category: 'database'
  },
  {
    name: 'Redis',
    level: 4,
    category: 'database'
  },
  {
    name: 'SQL Server',
    level: 3,
    category: 'database'
  },

  // 分布式技术
  {
    name: 'RocketMQ',
    level: 4,
    category: 'distributed'
  },
  {
    name: 'Kafka',
    level: 3,
    category: 'distributed'
  },
  {
    name: 'Dubbo',
    level: 4,
    category: 'distributed'
  },
  {
    name: 'Zookeeper',
    level: 3,
    category: 'distributed'
  },
  {
    name: '分布式锁',
    level: 4,
    category: 'distributed'
  },
  {
    name: 'JVM调优',
    level: 4,
    category: 'distributed'
  },

  // 工具
  {
    name: 'Git',
    level: 4,
    category: 'tools'
  },
  {
    name: 'Maven',
    level: 4,
    category: 'tools'
  },
  {
    name: 'IDEA',
    level: 5,
    category: 'tools'
  },
  {
    name: 'Docker',
    level: 3,
    category: 'tools'
  },
]

// 根据类别获取技能
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category)
}

// 类别显示名称
export const categoryNames: Record<Skill['category'], string> = {
  backend: '后端开发',
  database: '数据库',
  distributed: '分布式技术',
  tools: '开发工具',
}