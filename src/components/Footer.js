import React from "react";

// need icons links to github and linkedin

export default function Footer() {
  return (
    <div>
      This is Footer
      <p>
        <a href="mailto:mmlh.harris@gmail.com">Email</a>
      </p>
      <p>
        {/* double check no referrer vs no opener */}
        <a href="https://github.com/miss-mad" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/madeleine-m-harris/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
