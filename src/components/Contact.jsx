// Contact section with mailto and social links
import React from 'react'
import { site } from '../data/siteData'

export default function Contact(){
  return (
    <section id="contact" className="container" aria-labelledby="contact-heading">
      <div className="section-title">
        <h2 id="contact-heading">Contact</h2>
      </div>
      <div className="contact-grid">
        <div className="about-card">
          <p><strong>Location:</strong> {site.location}</p>
          <p><strong>Phone:</strong> <a href={`tel:${site.phone}`}>{site.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p>
            <strong>Social:</strong> <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
        <div className="about-card">
          <h4 style={{marginTop:0}}>Education</h4>
          <p>{site.education.degree} — {site.education.school}</p>
          <h4>Certifications</h4>
          <ul>
            {site.certifications.map((c)=> <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
