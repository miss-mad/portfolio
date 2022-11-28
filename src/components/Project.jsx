import React from "react";

export default function Project({ name, linkDeployedApp, linkGithubRepo }) {
  return (
    <section className="container">
      <div className="row">
        <div className="card">
          <div className="project-title-1">
            <div>This is the reusable Project component</div>
            <h3>{name}</h3>
            <button className="btn">
              <a
                href={linkDeployedApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Application Link
              </a>
            </button>
            <button className="btn">
              <a
                href={linkGithubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
