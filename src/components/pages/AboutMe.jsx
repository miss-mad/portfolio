import React from "react"
import headshotPhoto from "../assets/harris_headshot.jpg"

export default function AboutMe() {
  return (
    <section className="container-no-flex" id="about-me">
      <div className="container-flex">
        <h3>About Me</h3>
        <p>
          Hi, my name is Madeleine Harris. I am a self-motivated full stack web
          developer with a unique and varied background in healthcare, retail,
          event coordination, property management, accounting, and the fine
          arts. This wide array of experience culminates in a meticulous,
          disciplined, and ever-inquisitive fast learner. Excited to bring new
          technical and development skills, combined with existing knowledge and
          skill, to this flourishing field of web development.
        </p>
        <figure>
          <img
            src={headshotPhoto}
            alt="Headshot of Madeleine Harris"
            height="200"
            className="resize"
          />
        </figure>
      </div>
    </section>
  )
}
