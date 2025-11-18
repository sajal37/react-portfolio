// Project card component with GitHub and Live buttons
import React from 'react'

function slugify(str){
  return String(str).toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

export default function ProjectCard({project}){
  const id = `proj-${slugify(project.title)}`
  return (
    <article className="project-card" aria-labelledby={id}>
      <div className="project-head">
        <h3 id={id} className="project-title">{project.title}</h3>
        <div className="project-meta muted">{project.tech.join(' • ')}</div>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-actions">
        {project.github && (
          <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.live && (
          <a className="btn secondary" href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
        )}
      </div>
    </article>
  )
}
