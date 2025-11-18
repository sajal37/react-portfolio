// Fixed top navigation with responsive hamburger menu
import React, { useState } from 'react'
import { site } from '../data/siteData'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header" aria-label="Main navigation">
      <div className="container nav-inner">
        <div className="logo">{site.name.split(' ')[0]}</div>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </nav>

        <button className="nav-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>
          <span className={`hamburger ${open ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
