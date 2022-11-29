import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

// import TEST from "./components/pages/TEST";


function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const handleNavBarChange = (page) => setCurrentPage(page);

  // react router replaces this when we learn it later
  function renderPage() {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      // return <TEST />;
      return <Contact />;
    }
    return <Resume />;
  }

  // placing the code following "return" inside () lets us enter to a new line and format the code more nicely
  return (
    <div>
      {/* <Router> */}
      <Header
        currentPage={currentPage}
        handleNavBarChange={handleNavBarChange}
      />
      {/* <div className="container"> */}
      <MainContent content={renderPage()} />
      {/*<MainContent />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div> */}
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
