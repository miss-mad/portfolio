import {
  MailOutlined,
  GithubOutlined,
  CoffeeOutlined,
  CommentOutlined,
  ProfileOutlined,
  LinkedinOutlined,
  MenuFoldOutlined,
  FolderOpenOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

import React, { useState } from "react"
import { Affix, Button, Layout, Menu } from "antd"
import { Link, useNavigate } from "react-router-dom"
// import { useMediaQuery } from "react-responsive"
// import buttonMail from "./buttonMail"

const { Sider } = Layout

export default function Sidebar() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  // const [mode, setMode] = useState("vertical")

  const handleNavBarChange = ({ key }) => {
    navigate(key)
  }

  const onButtonClick = () => {
    setCollapsed(!collapsed)
  }

  // const handleMode = (value) => {
  //   setMode(value ? "horizontal" : "vertical")
  // }

  const navBarItems = [
    {
      label: "About Me",
      key: "/about-me",
      icon: <CoffeeOutlined />,
      danger: true,
    },
    {
      label: "Portfolio",
      key: "/portfolio",
      // icon: <FolderOpenOutlined />,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      label: "Resume",
      key: "/resume",
      icon: <ProfileOutlined />,
    },
    // {
    //   label: "Contact",
    //   key: "/contact",
    //   icon: <CommentOutlined />,
    // },
    // {
    //   label: "Blog",
    //   key: "/blog",
    //   icon: < />,
    // },
  ]

  const socialLinks = [
    {
      label: (
        <a
          href="mailto:mmlh.harris@gmail.com?subject=Hello, Madeleine!"
          target="_blank"
        >
          Email
        </a>
      ),
      key: "email",
      icon: <MailOutlined />,
    },
    // {
    //   <ButtonEmail/>
    // },
    {
      label: (
        <a
          href="https://github.com/miss-mad"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      ),
      key: "github",
      icon: <GithubOutlined />,
    },
    {
      label: (
        <a
          href="https://www.linkedin.com/in/madeleine-m-harris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      ),
      key: "linkedin",
      icon: <LinkedinOutlined />,
    },
  ]

  return (
    <Affix>
      <Sider
        breakpoint="md"
        onBreakpoint={(broken) => {
          broken ? setCollapsed(true) : setCollapsed(false)
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <div className="side-nav">
          <Button className="sider-button" onClick={onButtonClick}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
              }
            )}
          </Button>
          {collapsed ? (
            <Link to="#about-me">
              <h1 className="logo">H</h1>
            </Link>
          ) : (
            <a href="#about-me">
              <h1 className="logo">Harris</h1>
            </a>
          )}

          <nav>
            <Menu
              theme="dark"
              mode="inline"
              items={navBarItems}
              onClick={handleNavBarChange}
              style={{ fontFamily: "Public Sans" }}
            />
            <Menu mode="inline" items={socialLinks} />
            {/* <buttonMail
              label="This is a label"
              mailto="mailto:mmlh.harris@gmail.com"
            /> */}
          </nav>
        </div>
      </Sider>
    </Affix>
  )
}
