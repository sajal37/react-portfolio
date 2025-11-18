// About section — bio pulled from siteData.js
import React from 'react'
import { site } from '../data/siteData'

export default function About(){
  return (
    <section id="about" className="container" aria-labelledby="about-heading">
      <div className="section-title">
        <h2 id="about-heading">About</h2>
      </div>
      <div className="about-card">
        <p>{site.bio}</p>
      </div>
    </section>
  )
}
