import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../data/projects'

// 项目图标SVG
const projectIcons: Record<string, JSX.Element> = {
  robot: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2a2 2 0 012 2v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v4a2 2 0 01-2 2h-2v1a2 2 0 01-4 0v-1H8a2 2 0 01-2-2v-4H5a1 1 0 110-2h1V7a2 2 0 012-2h2V4a2 2 0 012-2zm0 4a1 1 0 100 2 1 1 0 000-2zm-4 4v4h8v-4H8zm4 6a1 1 0 100 2 1 1 0 000-2z"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm15-12v7h3v-7h-3zm-7.5-9L2 6v2h19V6l-8.5-5zM2 9h19v2H2V9z"/>
    </svg>
  ),
  emergency: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/>
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.61 2.06-5.91 6-9.7 3.94 3.79 6 7.09 6 9.7 0 3.63-2.65 6.2-6 6.2z"/>
    </svg>
  ),
  dam: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-6.3-2.8-8.27-2.8C6.09 4.5 3 7.4 3 10.9s3.09 6.4 6.69 6.4c3.3 0 6.07-1.96 7.85-4.48l1.46 1.34C17.2 17.07 14.1 20 9.69 20 4.4 20 0 15.55 0 10.9S4.4 1.8 9.69 1.8c3.89 0 7.26 2.2 9.2 4.68l2.1-2.16V10.12h.01z"/>
    </svg>
  ),
}

// 项目图片生成组件
const ProjectImage = ({ project }: { project: Project }) => (
  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
    <div className="text-white/30">
      {projectIcons[project.icon] || projectIcons.robot}
    </div>
  </div>
)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // 项目卡片组件
  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setSelectedProject(project)}
      className="bg-dark-200 rounded-xl overflow-hidden cursor-pointer group hover:bg-dark-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      {/* 项目图片 */}
      <div className="relative h-48 overflow-hidden">
        <ProjectImage project={project} />

        {/* 悬停遮罩 */}
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            查看详情
          </span>
        </div>
      </div>

      {/* 项目信息 */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          {project.period && (
            <span className="text-xs text-gray-500 bg-dark-300 px-2 py-1 rounded">{project.period}</span>
          )}
        </div>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

        {/* 技术栈 */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-dark-300 text-gray-400 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-gray-500">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  )

  // 详情弹窗组件
  const ProjectModal = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 项目图片 */}
        <div className="relative h-64">
          <ProjectImage project={project} />

          {/* 关闭按钮 */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-dark/50 rounded-full flex items-center justify-center text-white hover:bg-dark/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 项目详情 */}
        <div className="p-6">
          {/* 标题和时间 */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            {project.period && (
              <span className="text-sm text-gray-400 bg-dark-300 px-3 py-1 rounded-lg">{project.period}</span>
            )}
          </div>

          {/* 公司 */}
          {project.company && (
            <div className="text-gray-400 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {project.company}
            </div>
          )}

          {/* 详细描述 */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          {/* 技术栈 */}
          <div className="mb-6">
            <h3 className="text-sm text-purple-400 mb-3 font-medium">技术栈</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-dark-300 text-gray-300 rounded-lg border border-dark-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 项目亮点 */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm text-green-400 mb-3 font-medium">项目亮点</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 项目职责 */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h3 className="text-sm text-blue-400 mb-3 font-medium">项目职责</h3>
              <ul className="space-y-2">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    // 项目展示区域
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            项目展示
          </span>
        </motion.h2>

        {/* 描述 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          点击项目卡片查看详细信息，了解我在各个项目中的技术实践和职责贡献。
        </motion.p>

        {/* 项目卡片列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* 详情弹窗 */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </AnimatePresence>
    </section>
  )
}

export default Projects