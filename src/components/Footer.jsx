import React from "react";

// need icon links to github and linkedin
// need to make a third platform

export default function Footer() {
  return (
    <div className="container">
      {/* This is Footer */}
      {/* <p> */}
      <a href="mailto:mmlh.harris@gmail.com">Email</a>
      {/* </p> */}
      {/* <p> */}
      <a
        href="https://github.com/miss-mad"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      {/* </p> */}
      {/* <p> */}
      {/* </p> */}
      <a
        href="https://www.linkedin.com/in/madeleine-m-harris/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Third platform here
      </a>
    </div>
  );
}
