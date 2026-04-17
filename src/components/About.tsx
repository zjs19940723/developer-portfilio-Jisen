import { motion } from 'framer-motion'
import { getSkillsByCategory, categoryNames, type Skill } from '../data/skills'

const About = () => {
  // 技能等级转换为颜色
  const getLevelColor = (level: number): string => {
    if (level >= 5) return 'bg-green-500/20 text-green-400 border-green-500/30'
    if (level >= 4) return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  // 技能标签组件
  const SkillTag = ({ skill }: { skill: Skill }) => (
    <span
      className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(skill.level)}`}
    >
      {skill.name}
    </span>
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

        {/* 个人介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-gray-400 leading-relaxed mb-6 text-center">
            我是一名拥有 7 年经验的 Java 后端开发工程师，具备 AI Agent 全栈开发能力。
            精通 Spring 全栈技术（Spring Boot、Spring Cloud），熟悉 JVM 调优、分布式系统设计。
            熟悉 Spring AI、LangChain4j 等 AI 开发框架，能独立开发 RAG 知识库、工具调用、多 Agent 协作的企业级 AI 应用。
            热爱阅读框架源码，善于利用 Claude Code 等 AI 工具辅助开发，自主学习能力强。
          </p>

          {/* 个人特点 */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '💻', text: '7年Java经验' },
              { icon: '🎯', text: 'Spring全栈' },
              { icon: '🤖', text: 'AI Agent开发' },
              { icon: '🚀', text: '分布式架构' },
              { icon: '📊', text: '监控告警' },
              { icon: '🤝', text: '团队协作' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-200 rounded-lg"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 技能列表 - 标签式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center">技术栈</h3>

          <div className="space-y-6">
            {/* 后端开发 */}
            <div>
              <h4 className="text-sm text-purple-400 mb-3 font-medium">{categoryNames.backend}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory('backend').map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* 数据库 */}
            <div>
              <h4 className="text-sm text-blue-400 mb-3 font-medium">{categoryNames.database}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory('database').map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* 分布式技术 */}
            <div>
              <h4 className="text-sm text-green-400 mb-3 font-medium">{categoryNames.distributed}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory('distributed').map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* 开发工具 */}
            <div>
              <h4 className="text-sm text-orange-400 mb-3 font-medium">{categoryNames.tools}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory('tools').map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* AI应用开发 */}
            <div>
              <h4 className="text-sm text-cyan-400 mb-3 font-medium">{categoryNames.ai}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory('ai').map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About