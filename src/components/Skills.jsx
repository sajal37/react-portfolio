// Skills section shows skills in responsive grid
import React from 'react'
import { site } from '../data/siteData'

export default function Skills(){
  return (
    <section id="skills" className="container" aria-labelledby="skills-heading">
      <div className="section-title">
        <h2 id="skills-heading">Skills</h2>
      </div>
      <div className="skills-grid">
        {site.skills.map((s)=> (
          <div key={s} className="skill-pill" role="listitem">{s}</div>
        ))}
      </div>
    </section>
  )
}
