import React from "react";

// need 6 projects, their titles, links to github and deployed apps

export default function Portfolio() {
  return (
    <div>
      This is Portfolio
      <h3>Portfolio</h3>
      <section id="projects" class="projects">
        <h2>Projects</h2>
        <div class="row-1">
          <div class="card">
            <div class="project-title-1">
              <a href="https://miss-mad.github.io/mthsy-music/" target="_blank">
                MTHSY Music!
              </a>
            </div>
          </div>
        </div>
        <div class="row-2">
          <div class="card">
            <div class="project-title-2">
              <a href="https://whooooos-app.herokuapp.com/" target="_blank">
                Who's App
              </a>
            </div>
          </div>
        </div>
        <div class="row-3">
          <div class="card">
            <div class="project-title-3">
              <a
                href="https://miss-mad.github.io/weather-finder/"
                target="_blank"
              >
                Weather Finder
              </a>
            </div>
          </div>
          <div class="card">
            <div class="project-title-4">
              <a href="https://miss-mad.github.io/what-a-day/" target="_blank">
                What A Day
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
