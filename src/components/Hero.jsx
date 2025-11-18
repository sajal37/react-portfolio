// Hero section with profile image and CTA
import React from 'react'
import { site } from '../data/siteData'
import profile from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section className="hero container" id="hero" aria-label="Introduction">
      <div className="hero-inner hero-layout">
        <div className="hero-card">
          <div className="hero-left">
            <img src={profile} alt={`${site.name} profile`} className="profile" />
          </div>
          <div className="hero-right">
            <h1 className="hero-name">{site.name}</h1>
            <p className="hero-tag">{site.tagline}</p>
            <p className="hero-loc muted">{site.location} • {site.phone}</p>
            <p className="hero-bio">{site.bio}</p>
            <div className="cta" style={{marginTop:12}}>
              <a className="btn" href="#projects" aria-label="View projects">View Projects</a>
              <a className="btn secondary" href="#contact" aria-label="Contact" style={{marginLeft:8}}>Contact</a>
            </div>
            <div style={{marginTop:12}}>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="social">GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="social" style={{marginLeft:12}}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
