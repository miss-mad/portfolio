import React from "react"
import resume from "../assets/Harris_Resume.pdf"
import { Card, Collapse, List } from "antd"
const { Meta } = Card
const { Panel } = Collapse

export default function Resume() {
  const onChange = (key) => {
    console.log(key)
  }

  const cardData = [
    {
      key: "a",
      cardTitle: "Languages",
      listData: [
        { key: 1, name: "Git" },
        { key: 2, name: "HTML5" },
        { key: 3, name: "CSS3" },
        { key: 4, name: "JavaScript" },
        { key: 5, name: "SQL" },
        { key: 6, name: "NoSQL" },
        { key: 7, name: "GraphQL" },
      ],
    },
    {
      key: "b",
      cardTitle: "Frameworks",
      listData: [
        { key: 8, name: "Materialize" },
        { key: 9, name: "Bootstrap" },
        { key: 10, name: "Express" },
        { key: 11, name: "MySQL" },
      ],
    },
    {
      key: "c",
      cardTitle: "Libraries",
      listData: [
        { key: 12, name: "jQuery" },
        { key: 13, name: "Sequelize" },
        { key: 14, name: "MongoDB and Mongoose" },
        { key: 15, name: "Apollo" },
        { key: 16, name: "React" },
        { key: 17, name: "Ant Design" },
      ],
    },
    {
      key: "d",
      cardTitle: "Core Concepts",
      listData: [
        { key: 18, name: "Mobile-First Design" },
        { key: 19, name: "Local and Session Storage" },
        { key: 20, name: "APIs" },
        { key: 21, name: "User Authentication" },
        { key: 22, name: "Agile Methodology" },
        { key: 23, name: "PWAs" },
        { key: 24, name: "Github and Heroku Deployment" },
      ],
    },
  ]

  const text = <h4>Download my resume here</h4>

  const link = (
    <a
      href={resume}
      className="downloadResume"
      target="_blank"
      rel="noopener noreferrer"
      download
      style={{ fontSize: 24, color: "#001529" }}
    >
      Madeleine Harris Resume
    </a>
  )

  return (
    <section className="container-no-flex">
      <div className="resume-headers">
        <h3>Technical Skills</h3>
      </div>

      {cardData.map((cardData) => {
        return (
          <Card
            key={cardData.key}
            title={cardData.cardTitle}
            className="my-2"
            size="small"
            hoverable
          >
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                column: 3,
              }}
              dataSource={cardData.listData}
              renderItem={(listData) => {
                return (
                  <List.Item>
                    <Meta key={listData.key} description={listData.name} />
                  </List.Item>
                )
              }}
            />
          </Card>
        )
      })}

      <Collapse
        defaultActiveKey={[""]}
        collapsible="header"
        onChange={onChange}
      >
        <Panel header={text} key="1">
          <p>{link}</p>
        </Panel>
      </Collapse>
    </section>
  )
}
