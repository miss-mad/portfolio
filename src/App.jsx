import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "antd"

import Sidebar from "./components/Sidebar"
import AboutMe from "./components/pages/AboutMe"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"

const { Content } = Layout

export default function App() {
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
