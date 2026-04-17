import { motion } from 'framer-motion'
import { skills, getSkillsByCategory, categoryNames, type Skill } from '../data/skills'

const About = () => {
  // 技能等级转换为颜色
  const getLevelColor = (level: number): string => {
    if (level >= 4) return 'from-green-500 to-emerald-500'
    if (level >= 3) return 'from-blue-500 to-cyan-500'
    return 'from-gray-500 to-gray-400'
  }

  // 技能条组件
  const SkillBar = ({ skill }: { skill: Skill }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}/5</span>
      </div>
      <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level * 20}%` }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
        />
      </div>
    </motion.div>
  )

  return (
    // 关于我区域，包含详细介绍和技能列表
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            关于我
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 详细介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">我是谁？</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              我是一名拥有 5 年经验的 Java 开发工程师，毕业于河海大学。
              精通 Spring 全栈技术（Spring Boot、Spring Cloud），熟悉 JVM 调优、分布式系统设计。
              曾在无锡喔趣科技、南京慧明软件等多家公司担任核心开发角色。
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              在工作中，我注重代码质量和系统架构，擅长解决高并发、分布式场景下的技术难题。
              熟悉 MySQL 调优、Redis 缓存、RocketMQ/Kafka 消息队列等技术。
              热爱阅读框架源码，注重团队合作，有较强自学能力。
            </p>

            {/* 个人特点 */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '💻', text: '5年Java经验' },
                { icon: '🎯', text: 'Spring全栈' },
                { icon: '🚀', text: '分布式架构' },
                { icon: '🤝', text: '团队协作' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-dark-200 rounded-lg"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 技能列表 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">技能列表</h3>

            {/* 后端开发 */}
            <div className="mb-6">
              <h4 className="text-sm text-purple-400 mb-2 font-medium">{categoryNames.backend}</h4>
              {getSkillsByCategory('backend').map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            {/* 数据库 */}
            <div className="mb-6">
              <h4 className="text-sm text-blue-400 mb-2 font-medium">{categoryNames.database}</h4>
              {getSkillsByCategory('database').map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            {/* 分布式技术 */}
            <div className="mb-6">
              <h4 className="text-sm text-green-400 mb-2 font-medium">{categoryNames.distributed}</h4>
              {getSkillsByCategory('distributed').map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>

            {/* 开发工具 */}
            <div>
              <h4 className="text-sm text-orange-400 mb-2 font-medium">{categoryNames.tools}</h4>
              {getSkillsByCategory('tools').map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About