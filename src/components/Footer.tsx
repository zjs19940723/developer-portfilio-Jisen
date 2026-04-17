import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    // 页脚
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 bg-dark border-t border-dark-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          {/* 版权信息 */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Developer. All rights reserved.
          </p>

          {/* 返回顶部按钮 */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            返回顶部
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer