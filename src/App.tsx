import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* 导航栏 */}
      <Header />

      {/* 主要内容 */}
      <main>
        {/* 首页 Hero 区域 */}
        <Hero />

        {/* 关于我 */}
        <About />

        {/* 项目展示 */}
        <Projects />

        {/* 联系方式 */}
        <Contact />
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  )
}

export default App