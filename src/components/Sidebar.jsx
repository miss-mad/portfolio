import {
  CoffeeOutlined,
  CommentOutlined,
  FolderOpenOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
} from "@ant-design/icons"

import React, { useState } from "react"
import { Layout, Menu, Button } from "antd"
import { useNavigate } from "react-router-dom"

const { Sider } = Layout

export default function Sidebar() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const handleNavBarChange = ({ key }) => {
    navigate(key)
  }

  const navBarItems = [
    // {
    //   label: "Home",
    //   key: "/",
    //   icon: <HomeOutlined />,
    // },
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
    // {
    //   label: "PortfolioC",
    //   key: "/portfolio-carousel",
    //   icon: <FolderOpenOutlined />,
    // },
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

  const iconLinks = [
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
  {
    /* <MenuOutlined /> */
    // style={{ lineHeight: "4px" }}
  }

  return (
    <Sider
      style={{ height: "100vh" }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div>
        <div className="side-nav">
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
            <Menu items={iconLinks} />
          </nav>
        </div>
        <Button>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Button>
      </div>
    </Sider>
  )
}
