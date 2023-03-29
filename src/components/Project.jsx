import {
  LinkOutlined,
  GithubOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import React from "react"
import { Popover } from "antd"
import { Col, Row } from "antd"
import projectData from "./projectData"
import MediaQuery from "react-responsive"

export default function Project({
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
  // const isMobile = useMediaQuery({ query: "(max-width: 576px)" })

  // console.log(isMobile)

  // const font_size = isMobile
  //   ? { fontSize: "32px !important" }
  //   : { fontSize: "16px" }

  // console.log(font_size)

  return (
    <div>
      <MediaQuery maxWidth={433}>
        <div
          className="projects-mobile"
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div style={{ margin: "16px" }}>
            <h3 className="project-name">{name}</h3>
            <Row className="project-info">
              <Col>
                <Row>
                  <Col span={24} className="info-mobile">
                    {summary}
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col span={24} className="info-mobile">
                    {role && <>{role}</>}
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col span={24} className="info-mobile">
                    {technologies}
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col span={24} className="type-mobile">
                    {type}
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="popovers">
              <Row>
                <Col span={8}>
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
                </Col>
                <Col span={8}>
                  <Popover
                    content="Github Repo"
                    trigger="hover"
                    placement="bottom"
                  >
                    <a
                      href={linkGithubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <GithubOutlined key="github" />
                    </a>
                  </Popover>
                </Col>

                {linkAppDemo && (
                  <div>
                    <Popover
                      content="App Demo"
                      trigger="hover"
                      placement="bottom"
                    >
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
              </Row>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={434}>
        <div
          className="projects"
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div className="project-front">
            <h3 className="project-name">{name}</h3>
          </div>
          <div
            className="project-back"
            style={{ backgroundImage: backgroundImage }}
          >
            <div>
              <Row className="project-info">
                <Col>
                  <Row>
                    <Col span={24} className="info-laptop">
                      {summary}
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col span={24} className="info-laptop">
                      {role && <>{role}</>}
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col span={24} className="info-laptop">
                      {technologies}
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col span={24} className="type-laptop">
                      {type}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="popovers">
                <Row>
                  <Col span={8}>
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
                  </Col>
                  <Col span={8}>
                    <Popover
                      content="Github Repo"
                      trigger="hover"
                      placement="bottom"
                    >
                      <a
                        href={linkGithubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        <GithubOutlined key="github" />
                      </a>
                    </Popover>
                  </Col>

                  {linkAppDemo && (
                    <div>
                      <Popover
                        content="App Demo"
                        trigger="hover"
                        placement="bottom"
                      >
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
                </Row>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  )
}
