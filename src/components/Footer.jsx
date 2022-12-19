import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

export default function Footer() {
  const navigate = useNavigate();
  const handleFooterClick = ({ key }) => {
    navigate(key);
  };

  const footerItems = [
    {
      label: <a href="mailto:mmlh.harris@gmail.com">Email</a>,
      key: "email",
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
    },
    // {
    //   label: (
    //     <a href="" target="_blank" rel="noopener noreferrer">
    //       Third platform here
    //     </a>
    //   ),
    //   key: "thirdPlatform",
    // },
  ];

  return (
    <div className="container">
      <Menu onClick={handleFooterClick} items={footerItems} mode="horizontal" />
    </div>
  );
}
