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

import React, { useState } from "react"
import { Affix, Button, Menu, Layout } from "antd"
import { useNavigate } from "react-router-dom"

const { Sider } = Layout

export default function Sidebar() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [sidebarSticky, setsidebarSticky] = useState()

  const handleNavBarChange = ({ key }) => {
    navigate(key)
  }

  const navBarItems = [
    {
      label: "AboutMe",
      key: "/about-me",
      icon: <CoffeeOutlined />,
      danger: true,
    },
    {
      label: "Portfolio",
      key: "/portfolio",
      icon: <FolderOpenOutlined />,
    },
    {
      label: "Contact",
      key: "/contact",
      icon: <CommentOutlined />,
    },
    {
      label: "Resume",
      key: "/resume",
      icon: <ProfileOutlined />,
    },
  ]

  const socialLinks = [
    {
      label: <a href="mailto:mmlh.harris@gmail.com">Email</a>,
      key: "email",
      icon: <MailOutlined />,
    },
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
    <>
      <Affix>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="side-nav">
            <Button className="siderButton">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Button>
            {collapsed ? (
              <h1 className="logo">H</h1>
            ) : (
              <h1 className="logo">Harris</h1>
            )}
            <nav className="nav-items">
              <Menu
                theme="dark"
                mode="inline"
                items={navBarItems}
                onClick={handleNavBarChange}
                defaultSelectedKeys={"/about-me"}
              />
              <Menu mode="inline" items={socialLinks} />
            </nav>
          </div>
        </Sider>
      </Affix>
    </>
  )
}