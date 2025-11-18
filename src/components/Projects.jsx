// Projects section: maps projects from siteData into cards
import React from 'react'
import { site } from '../data/siteData'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="container" aria-labelledby="projects-heading">
      <div className="section-title">
        <h2 id="projects-heading">Projects</h2>
      </div>
      <div className="projects-grid">
        {site.projects.map((p)=> (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
