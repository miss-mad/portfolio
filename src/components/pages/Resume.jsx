import React, { useState } from "react"
import resume from "../assets/Harris_Resume.pdf"
import { Card, Col, List, Row } from "antd"
const { Meta } = Card
// import { listOfProficiencies as proficiencies } from "../listofProficiencies";

export default function Resume() {
  const listOfProficiencies = [
    { id: 1, name: "Git" },
    { id: 2, name: "HTML5" },
    { id: 3, name: "CSS3" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "SQL" },
    { id: 6, name: "NoSQL" },
    { id: 7, name: "GraphQL" },
    { id: 8, name: "CSS Frameworks" },
    { id: 9, name: "MySQL" },
    { id: 10, name: "Apollo" },
    { id: 11, name: "jQuery" },
    { id: 12, name: "Sequelize" },
    { id: 13, name: "MongoDB and Mongoose" },
    { id: 14, name: "React" },
    { id: 15, name: "Mobile-First Design" },
    { id: 16, name: "APIs - client, third party and server-side" },
    { id: 17, name: "Agile Methodology" },
    { id: 18, name: "Github and Heroku Deployment" },
  ]

  const listTitleData = [
    { title: "1", content: "contentcard1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
  ]

  const listContentData = [
    { description: "descr 1" },
    { description: "descr 2" },
    { description: "descr 3" },
    { description: "descr 4" },
  ]

  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    {
      key: "tab2",
      tab: "tab2",
    },
  ]

  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  }

  const [activeTabKey, setActiveTabKey] = useState("tab1")
  const onTab1Change = (key) => {
    setActiveTabKey(key)
  }

  // {listOfProficiencies.map((proficiency) => {
  //   return (
  //     <ul className="proficiency-list">
  //       <li>{proficiency.name}</li>
  //     </ul>
  //   )
  // })}

  const testObj = {
    title: "titletest",
    content: "contenttest",
  }

  const testArr = ["contenttestarr1", "contenttestarr2"]

  return (
    <section className="container">
      <h3>Resume</h3>
      <a
        href={resume}
        className="downloadResume"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Downloadable resume here
      </a>

      <h5>List of Proficiencies</h5>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
              <div>
                {testObj.title}
                {testObj.content}
                <div>{testArr}</div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
              {testObj.title}
              {testObj.content}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
              {testObj.title}
              {testObj.content}
            </Card>
          </Col>
        </Row>
      </div>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={listTitleData}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.title}
              tabList={tabList}
              activeTabKey={activeTabKey}
              onTabChange={(key) => {
                onTab1Change(key)
              }}
            >
              <Meta description={item.description} />
              {listContentData[activeTabKey]}
            </Card>
          </List.Item>
        )}
      />

      <Card
        title="test"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTab1Change(key)
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </section>
  )
}

{
  /* <List
        size="small"
        bordered
        dataSource={listContentData}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      /> */
}
