import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  Maximize2, ExternalLink, X, Camera, 
  Globe, Activity, Ghost, Sparkles, 
  Terminal, Layout, Box, Share2
} from 'lucide-react'
import './App.css'

const BP_NODES = [
  { id: 'buzz', title: 'PARADA.BUZZ', url: 'https://parada.buzz/', icon: <Activity size={18} />, color: '#00ff00', desc: 'The Signal' },
  { id: 'pics', title: 'PARADA.PICS', url: 'https://parada.pics/', icon: <Camera size={18} />, color: '#00ff00', desc: 'The Archive' },
  { id: 'quest', title: 'PARADA.QUEST', url: 'https://parada.quest/', icon: <Box size={18} />, color: '#ff00ff', desc: 'The Emulation' },
  { id: 'lat', title: 'PARADA.LAT', url: 'https://parada.lat/', icon: <Globe size={18} />, color: '#e91e63', desc: 'The Mural' },
  { id: 'one', title: 'PARADA.ONE', url: 'https://parada.one/', icon: <Layout size={18} />, color: '#00ff00', desc: 'The Heartbeat' },
  { id: 'info', title: 'PARADA.INFO', url: 'https://parada.info/', icon: <Terminal size={18} />, color: '#00ff00', desc: 'The Kernel' },
  { id: 'lol', title: 'PARADA.LOL', url: 'https://parada.lol/', icon: <Ghost size={18} />, color: '#ff00ff', desc: 'The Glitch' }
]

function BioPortal() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredId] = useState<string | null>(null)
  const node = BP_NODES.find(n => n.id === activeNode)

  return (
    <div className="portal-template-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1 className="glitch-text" data-text="BIO PORTAL">BIO<span> PORTAL</span></h1>
          <p>HANDLE: /BP // IDENTITY: NICO_B</p>
        </div>
        <div className="portal-status">SIGNAL: STABLE</div>
      </header>

      <main className="node-grid">
        {BP_NODES.map((n) => (
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
             <div className="modal-content"><iframe src={node.url} title={node.title} /></div>
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
            <Link to="/bp">ALPHA_DEMO</Link>
            <button className="mypp-btn-sm">GET_EARLY_ACCESS</button>
         </div>
      </nav>

      <main className="mypp-hero">
         <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hero-content">
            <div className="hero-badge"><Sparkles size={12} /> THE_SOVEREIGN_ENGINE_ALPHA</div>
            <h1>BEYOND THE BIO.</h1>
            <h1 className="gradient-hero">OWN YOUR SIGNAL.</h1>
            <p>The high-fidelity portfolio engine for modern architects, photographers, and developers. Zero trackers. Just literal bytes.</p>
            <div className="hero-actions">
               <button className="mypp-btn-primary">SECURE_YOUR_HANDLE</button>
               <Link to="/bp" className="mypp-btn-secondary">VIEW_NICO_B/BP</Link>
            </div>
         </motion.div>
      </main>

      <section className="mypp-grid">
         <div className="mypp-feature">
            <Share2 color="var(--pixels-pink)" />
            <h3>MULTI-NODE SYNC</h3>
            <p>Live-render your entire digital ecosystem from a single unified handle.</p>
         </div>
         <div className="mypp-feature">
            <Terminal color="var(--pixels-pink)" />
            <h3>LITERAL BYTES</h3>
            <p>Clinical, high-performance infrastructure designed for the high-density signal.</p>
         </div>
         <div className="mypp-feature">
            <Activity color="var(--pixels-pink)" />
            <h3>EDGE OPTIMIZED</h3>
            <p>Native Cloudflare CDN integration for worldwide zero-latency visual delivery.</p>
         </div>
      </section>

      <footer className="mypp-footer">
         <div className="footer-left">© 2026 PIXELS AGENCY // ARCHITECT: NICO_B</div>
         <div className="footer-right">BUILT FOR THE SOVEREIGN INDIVIDUAL.</div>
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
        <Route path="/bp" element={<BioPortal />} />
        <Route path="/pp" element={<BioPortal />} /> {/* Legacy redirect */}
      </Routes>
    </Router>
  )
}

export default App
