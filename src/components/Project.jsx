import React from "react"
import { Popover } from "antd"
import {
  LinkOutlined,
  GithubOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import projectData from "./projectData"

export default function Project({
  key,
  name,
  role,
  type,
  index,
  summary,
  className,
  linkAppDemo,
  technologies,
  linkGithubRepo,
  linkDeployedApp,
  backgroundImage,
}) {
  return (
    <section className="projects" style={{ backgroundImage: backgroundImage }}>
      <div className="project-front">
        <h3 className="project-name">{name}</h3>
      </div>
      <div
        className="project-back"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="project-info">
          <h4>{summary}</h4>
          {role && <h4>{role}</h4>}
          <h4>{technologies}</h4>
          <h4 className="type">{type}</h4>
        </div>
        <div className="popovers">
          <div>
            <Popover
              content="Deployed Application"
              trigger="hover"
              placement="bottom"
            >
              <a
                href={linkDeployedApp}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <LinkOutlined key="deployed" />
              </a>
            </Popover>
          </div>
          <div>
            <Popover content="Github Repo" trigger="hover" placement="bottom">
              <a
                href={linkGithubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <GithubOutlined key="github" />
              </a>
            </Popover>
          </div>
          {linkAppDemo && (
            <div>
              <Popover content="App Demo" trigger="hover" placement="bottom">
                <a
                  href={linkAppDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <VideoCameraOutlined key="app-demo" />
                </a>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
