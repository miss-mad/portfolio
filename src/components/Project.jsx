import React from "react"
import { Popover } from "antd"
import { LinkOutlined, GithubOutlined } from "@ant-design/icons"

export default function Project({
  key,
  name,
  index,
  className,
  linkGithubRepo,
  linkDeployedApp,
  backgroundImage,
}) {
  return (
    <section className="projects" style={{ backgroundImage: backgroundImage }}>
      <h3 className="project-name">{name}</h3>
      <div className="project-info-wrapper">
        <div>
          <Popover
            content="Deployed Application"
            trigger="hover"
            placement="bottom"
          >
            <a href={linkDeployedApp} target="_blank" rel="noopener noreferrer">
              <LinkOutlined key="deployed" />
            </a>
          </Popover>
        </div>

        <div>
          <Popover content="Github Repo" trigger="hover" placement="bottom">
            <a href={linkGithubRepo} target="_blank" rel="noopener noreferrer">
              <GithubOutlined key="github" />
            </a>
          </Popover>
        </div>
      </div>
    </section>
  )
}
