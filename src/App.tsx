import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  Maximize2, ExternalLink, X, Camera, 
  Activity, Sparkles, Cpu, Layers, Database, Monitor
} from 'lucide-react'
import './App.css'

// REFINED MARKETPLACE TEMPLATE NODES
const MARKET_NODES = [
  { id: 'gallery', title: 'Client Gallery', url: 'https://example.com', icon: <Camera size={18} />, color: 'var(--pixels-pink)', desc: 'High-density visual storytelling for your premium clients.' },
  { id: 'sys', title: 'Project Blueprint', url: 'https://example.com', icon: <Cpu size={18} />, color: 'var(--pixels-green)', desc: 'The process and technical logic behind your greatest works.' },
  { id: 'uiux', title: 'Design System', url: 'https://example.com', icon: <Layers size={18} />, color: '#00ffff', desc: 'Sovereign design flows and interactive experience mapping.' }
]

function BioPortal() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredId] = useState<string | null>(null)
  const node = MARKET_NODES.find(n => n.id === activeNode)

  return (
    <div className="portal-template-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1 className="glitch-text" data-text="Bio Portal">Bio<span> Portal</span></h1>
          <p>Template: Studio V1 // Status: Optimized</p>
        </div>
        <div className="portal-status">
           <motion.div 
             className="status-pulse"
             animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
             transition={{ duration: 3, repeat: Infinity }}
           />
           Signal Active
        </div>
      </header>

      <main className="node-grid">
        {MARKET_NODES.map((n) => (
          <motion.div 
            key={n.id} 
            className={`node-card ${hoveredNode === n.id ? 'is-hovered' : ''}`} 
            onMouseEnter={() => setHoveredId(n.id)} 
            onMouseLeave={() => setHoveredId(null)}
            transition={{ duration: 0.5 }} // Luxury smoothing
          >
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
            <div className="card-footer"><p>{n.desc}</p></div>
          </motion.div>
        ))}
      </main>

      <AnimatePresence>
        {activeNode && node && (
          <motion.div 
            className="fullscreen-modal" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
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
            <Link to="/bp">Portfolio Demo</Link>
            <a href="mailto:architect@pixels.agency?subject=Creative%20Architect%20Early%20Access" className="mypp-btn-sm">Get Early Access</a>
         </div>
      </nav>

      <main className="mypp-hero">
         <motion.div 
           initial={{ opacity: 0, y: 15 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.8 }}
           className="hero-content"
         >
            <div className="hero-badge"><Sparkles size={12} /> THE PORTFOLIO ENGINE</div>
            <h1>YOUR WORK, ELEVATED.</h1>
            <h1 className="gradient-hero">OWN YOUR SIGNAL.</h1>
            <p>A high-performance home for your creative legacy. Simple to set up, impossible to ignore. Pure performance. Zero trackers.</p>
            <div className="hero-actions">
               <a href="mailto:architect@pixels.agency?subject=Creative%20Architect%20Early%20Access" className="mypp-btn-primary">Claim your site name</a>
               <Link to="/bp" className="mypp-btn-secondary">View Template</Link>
            </div>
         </motion.div>
      </main>

      <section className="mypp-grid">
         <div className="mypp-feature">
            <Database color="var(--pixels-pink)" />
            <h3>Secure Archival</h3>
            <p>Immutable storage for your high-density creative signals and visual assets.</p>
         </div>
         <div className="mypp-feature">
            <Monitor color="var(--pixels-pink)" />
            <h3>Live Rendering</h3>
            <p>An interactive canvas that keeps your audience inside your sovereign ecosystem.</p>
         </div>
         <div className="mypp-feature">
            <Activity color="var(--pixels-pink)" />
            <h3>Global Reach</h3>
            <p>High-performance edge distribution for worldwide zero-latency content delivery.</p>
         </div>
      </section>

      <footer className="mypp-footer">
         <div className="footer-left">© 2026 PIXELS AGENCY // ARCHITECTED FOR THE SOVEREIGN INDIVIDUAL</div>
         <div className="footer-right">BUILDING THE FUTURE.</div>
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
