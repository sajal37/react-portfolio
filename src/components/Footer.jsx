// Footer with copyright and back-to-top link
import React from 'react'
import { site } from '../data/siteData'

export default function Footer(){
  return (
    <footer className="site-footer container" aria-label="Footer">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div>
          <a href="#top" className="btn secondary" aria-label="Back to top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
