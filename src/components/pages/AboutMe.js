import React from "react";
// import { Link } from "react-router-dom";

// need photo and short bio

export default function AboutMe() {
  return (
    <div>
      This is About Me
      <h3>About Me</h3>
      <p>New full stack web developer with a unique and varied background in healthcare, retail, event coordination, property management, accounting, and the fine arts. This wide array of experience culminates in a meticulous, disciplined, and ever-inquisitive fast learner. Excited to bring new technical and development skills, combined with existing knowledge and skill, to this flourishing field of web development.</p>
      <figure>
        <p>Photo here</p>
        {/* <img
            src="%PUBLIC_URL%/harris_headshot.jpg"
            alt="Headshot of Madeleine Harris"
            className="resize"
          /> */}
        {/* <Link to="/public/harris_headshot.jpg">
          <img src="/public/harris_headshot.jpg" alt="headshot" />
        </Link> */}
      </figure>
    </div>
  );
}
