import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Reveal><Home /></Reveal>
      <Reveal delay={80}><About /></Reveal>
      <Reveal delay={120}><Projects /></Reveal>
      <Reveal delay={160}><Contact /></Reveal>
    </div>
  )
}