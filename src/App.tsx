import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  Maximize2, ExternalLink, X, Camera, 
  Globe, Activity, Ghost, Sparkles, 
  Cpu, Terminal, Layout, Box
} from 'lucide-react'
import './App.css'

const MY_NODES = [
  { id: 'buzz', title: 'PARADA.BUZZ', url: 'https://parada.buzz/', icon: <Activity size={18} />, color: '#00ff00', desc: 'The Signal' },
  { id: 'pics', title: 'PARADA.PICS', url: 'https://parada.pics/', icon: <Camera size={18} />, color: '#00ff00', desc: 'The Archive' },
  { id: 'quest', title: 'PARADA.QUEST', url: 'https://parada.quest/', icon: <Box size={18} />, color: '#ff00ff', desc: 'The Emulation' },
  { id: 'lat', title: 'PARADA.LAT', url: 'https://parada.lat/', icon: <Globe size={18} />, color: '#e91e63', desc: 'The Mural' },
  { id: 'one', title: 'PARADA.ONE', url: 'https://parada.one/', icon: <Layout size={18} />, color: '#00ff00', desc: 'The Heartbeat' },
  { id: 'info', title: 'PARADA.INFO', url: 'https://parada.info/', icon: <Terminal size={18} />, color: '#00ff00', desc: 'The Kernel' },
  { id: 'lol', title: 'PARADA.LOL', url: 'https://parada.lol/', icon: <Ghost size={18} />, color: '#ff00ff', desc: 'The Glitch' }
]

function PixelsPortal() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredId] = useState<string | null>(null)
  const node = MY_NODES.find(n => n.id === activeNode)

  return (
    <div className="portal-template-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1 className="glitch-text" data-text="PIXELS PORTAL">PIXELS<span> PORTAL</span></h1>
          <p>HANDLE: /PP // ARCHITECT: NICO_B</p>
        </div>
        <div className="portal-status">
           ENCLAVE_SYNC: ACTIVE
        </div>
      </header>

      <main className="node-grid">
        {MY_NODES.map((n) => (
          <motion.div key={n.id} className={`node-card ${hoveredNode === n.id ? 'is-hovered' : ''}`} onMouseEnter={() => setHoveredId(n.id)} onMouseLeave={() => setHoveredId(null)}>
            <div className="card-header" style={{ borderBottomColor: n.color }}>
               <div className="card-label">{n.icon} <span>{n.title}</span></div>
               <div className="card-actions">
                  <button onClick={() => setActiveNode(n.id)}><Maximize2 size={14} /></button>
                  <a href={n.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /></a>
               </div>
            </div>
            <div className="preview-container">
               <iframe src={n.url} title={n.title} style={{ pointerEvents: hoveredNode === n.id ? 'auto' : 'none' }} />
               <div className={`iframe-overlay ${hoveredNode === n.id ? 'hidden' : ''}`}></div>
            </div>
            <div className="card-footer"><p>{n.desc} // SCROLL_ON_HOVER</p></div>
          </motion.div>
        ))}
      </main>

      <AnimatePresence>
        {activeNode && node && (
          <motion.div className="fullscreen-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <div className="modal-bar">
                <div className="modal-title">{node.icon} <span>{node.title}</span></div>
                <button className="close-btn" onClick={() => setActiveNode(null)}><X size={32} /></button>
             </div>
             <div className="modal-content">
                <iframe src={node.url} title={node.title} />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="crt-overlay"></div>
    </div>
  )
}

function Landing() {
  return (
    <div className="mypp-landing">
      <nav className="mypp-nav">
         <div className="mypp-logo">MY<span>PP</span>.SITE</div>
         <div className="mypp-links">
            <Link to="/pp">VIEW_DEMO_HANDLE</Link>
            <button className="mypp-btn-sm">START_BUILDING</button>
         </div>
      </nav>

      <main className="mypp-hero">
         <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hero-content">
            <div className="hero-badge"><Sparkles size={12} /> THE_SOVEREIGN_ENGINE</div>
            <h1>BUILD YOUR DESTINY.</h1>
            <h1 className="gradient-hero">OWN YOUR SIGNAL.</h1>
            <p>The premium portfolio engine for the next generation of architects, photographers, and developers. No trackers. No abstractions. Just literal bytes.</p>
            <div className="hero-actions">
               <button className="mypp-btn-primary">RECLAIM_YOUR_HANDLE</button>
               <Link to="/pp" className="mypp-btn-secondary">EXPLORE_PP_TEMPLATE</Link>
            </div>
         </motion.div>
      </main>

      <section className="mypp-grid">
         <div className="mypp-feature">
            <Cpu color="var(--pixels-green)" />
            <h3>KERNEL_LEVEL_CONTROL</h3>
            <p>Directly manage your multi-site infrastructure from a single sovereign dashboard.</p>
         </div>
         <div className="mypp-feature">
            <Terminal color="var(--pixels-green)" />
            <h3>SYSCALL_ARCHITECTURE</h3>
            <p>Configure your signal through literal, un-abstracted bytes. Establishing the quiet.</p>
         </div>
         <div className="mypp-feature">
            <Activity color="var(--pixels-green)" />
            <h3>REAL_TIME_TELEMETRY</h3>
            <p>Integrated Cloudflare CDN support for high-density visual and data signals.</p>
         </div>
      </section>

      <footer className="mypp-footer">
         <div className="footer-left">© 2026 PIXELS AGENCY // ARCHITECT: NICO_B</div>
         <div className="footer-right">STRENGTH IN THE COMMONS.</div>
      </footer>
      <div className="crt-overlay"></div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pp" element={<PixelsPortal />} />
      </Routes>
    </Router>
  )
}

export default App
