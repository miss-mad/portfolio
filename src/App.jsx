import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import Header from "./components/Header"
// import Home from "./components/Home"
import AboutMe from "./components/pages/AboutMe"
import Portfolio from "./components/pages/Portfolio"
// import PortfolioCarousel from "./components/pages/Portfolio-Carousel"
import { Layout, Menu, theme } from "antd"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
import Sidebar from "./components/Sidebar"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout

export default function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // const loader = async () => {
  //   // const user = await getUser();
  //   if (<Route path="/" /> === true) {
  //     return redirect("/about-me");
  //   }
  // };

  {
    /* <Route path="/" element={<Home />} /> */
  }

  return (
    <Layout>
      <Router>
        <Sidebar />
        <Layout>
          <Content>
            <Routes>
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </Layout>
  )
}

// ;<div className="container-app">
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/about-me" element={<AboutMe />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//       {/* <Route path="/portfolio-carousel" element={<PortfolioCarousel />} /> */}
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/resume" element={<Resume />} />
//       {/* <Route path="*" element={<Navigate to="/about-me"}/> */}
//     </Routes>
//   </Router>
// </div>
{
  /* <Footer /> */
}
