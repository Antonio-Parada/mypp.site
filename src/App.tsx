import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  Maximize2, ExternalLink, X, Camera, 
  Activity, Sparkles, 
  Cpu, 
  Layers, Database, Monitor
} from 'lucide-react'
import './App.css'

// MARKETPLACE TEMPLATE NODES
const MARKET_NODES = [
  { id: 'gallery', title: 'CLIENT_GALLERY', url: 'https://example.com', icon: <Camera size={18} />, color: 'var(--pixels-pink)', desc: 'High-density visual storytelling.' },
  { id: 'sys', title: 'SYSTEM_ARCHITECTURE', url: 'https://example.com', icon: <Cpu size={18} />, color: 'var(--pixels-green)', desc: 'Bare-metal infrastructure signals.' },
  { id: 'uiux', title: 'UI_UX_STREAMS', url: 'https://example.com', icon: <Layers size={18} />, color: '#00ffff', desc: 'Sovereign design systems.' }
]

function BioPortal() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredId] = useState<string | null>(null)
  const node = MARKET_NODES.find(n => n.id === activeNode)

  return (
    <div className="portal-template-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1 className="glitch-text" data-text="BIO PORTAL">BIO<span> PORTAL</span></h1>
          <p>TEMPLATE: PIXELS_MARKET_V1 // STATUS: STABLE</p>
        </div>
        <div className="portal-status">
           <motion.div 
             className="status-pulse"
             animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           />
           SIGNAL: ACTIVE
        </div>
      </header>

      <main className="node-grid">
        {MARKET_NODES.map((n) => (
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
            <div className="card-footer"><p>{n.desc} // SOVEREIGN_TEMPLATE</p></div>
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
            <a href="mailto:architect@pixels.agency?subject=Creative%20Architect%20Early%20Access" className="mypp-btn-sm">GET_EARLY_ACCESS</a>
         </div>
      </nav>

      <main className="mypp-hero">
         <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hero-content">
            <div className="hero-badge"><Sparkles size={12} /> SOVEREIGN_IDENTITY_ENGINE</div>
            <h1>BEYOND THE BIO.</h1>
            <h1 className="gradient-hero">OWN YOUR SIGNAL.</h1>
            <p>The premium portfolio engine for the next generation of architects, photographers, and developers. Zero trackers. Just literal bytes.</p>
            <div className="hero-actions">
               <a href="mailto:architect@pixels.agency?subject=Creative%20Architect%20Early%20Access" className="mypp-btn-primary">SECURE_YOUR_HANDLE</a>
               <Link to="/bp" className="mypp-btn-secondary">VIEW_ALPHA_TEMPLATE</Link>
            </div>
         </motion.div>
      </main>

      <section className="mypp-grid">
         <div className="mypp-feature">
            <Database color="var(--pixels-pink)" />
            <h3>IMMUTABLE_STORAGE</h3>
            <p>ZFS-backed archival for your high-density creative signals.</p>
         </div>
         <div className="mypp-feature">
            <Monitor color="var(--pixels-pink)" />
            <h3>LIVE_RENDERING</h3>
            <p>Zero-friction iframe architecture keeping users inside your sovereign ecosystem.</p>
         </div>
         <div className="mypp-feature">
            <Activity color="var(--pixels-pink)" />
            <h3>EDGE_DISTRIBUTION</h3>
            <p>Global Cloudflare CDN integration for zero-latency visual delivery.</p>
         </div>
      </section>

      <footer className="mypp-footer">
         <div className="footer-left">© 2026 PIXELS AGENCY // ARCHITECTED FOR THE SOVEREIGN INDIVIDUAL</div>
         <div className="footer-right">RECLAIMING THE KERNEL.</div>
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
        <Route path="/pp" element={<BioPortal />} />
      </Routes>
    </Router>
  )
}

export default App
