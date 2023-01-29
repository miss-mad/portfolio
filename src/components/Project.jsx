import React from "react"
import { Avatar, Card, Popover } from "antd"
import { LinkOutlined, GithubOutlined } from "@ant-design/icons"

const { Meta } = Card

export default function Project({
  key,
  name,
  index,
  className,
  linkGithubRepo,
  linkDeployedApp,
  backgroundImage,
}) {
  const handleDeployedAppClick = (e) => {
    console.log(e)
  }

  const handleGithubRepoClick = (e) => {
    console.log(e)
  }
  return (
    <div>
      <section
        className={`container project-card ${className}`}
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="row">
          <h3>{name}</h3>

          <button className="btn">
            <a href={linkDeployedApp} target="_blank" rel="noopener noreferrer">
              Deployed Application Link
            </a>
          </button>

          <button className="btn">
            <a href={linkGithubRepo} target="_blank" rel="noopener noreferrer">
              Github Repo Link
            </a>
          </button>
        </div>
      </section>

      <Card
        style={{
          width: 240,
          backgroundImage: backgroundImage,
        }}
        hoverable
      >
        <Meta title={name} description={(linkDeployedApp, linkGithubRepo)} />
      </Card>

      <Card
        style={{
          width: 300,
          backgroundImage: backgroundImage,
        }}
        actions={[
          <Popover
            content="Deployed Application"
            trigger="hover"
            placement="bottom"
          >
            <LinkOutlined key="deployed" onClick={handleDeployedAppClick} />
          </Popover>,
          <Popover content="Github Repo" trigger="hover" placement="bottom">
            <GithubOutlined key="github" onClick={handleGithubRepoClick} />
          </Popover>,
        ]}
        hoverable
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={name}
          description={(linkDeployedApp, linkGithubRepo)}
        />
      </Card>
    </div>
  )
}
