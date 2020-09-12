import React, { useState, useEffect } from "react"
import "../../css/AboutPage.css"
import { Row, Col } from 'reactstrap'
import skillsData from '../../data/skills.json'
import SkillIcons from '../common/SkillsIcons'

export default function AboutPage() {
  const [data, setData] = useState({})

  useEffect(() => {
    const jsonData = JSON.parse(JSON.stringify(skillsData))
    console.log(jsonData)
    jsonData.languages.map(language => {
      console.log(language.name)
    })
    setData(jsonData)
  }, [])

  const handleScroll = () => {
    const curve = document.querySelector(".curve")
    const homeDivHeight = document.getElementById("home").clientHeight;
    let currentScroll = 1 + (window.scrollY - homeDivHeight)/-500

    curve.style.transform = `scaleY(${currentScroll})`
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <div id="about">
      <section>
        <div className="my-intro">
            <p className="intro-title">About me</p>
            <p className="intro-header">Hello, my name is Thien</p>
            <p className="intro-body">I am a Fullstack web developer specialized in React. 
              With 6 years of learning and working experiences in IT, I have a diverse set of skills in both 
              front-end and back-end development, ranging from Java/Node.js, to React + Redux, 
              all the way to Javascript + HTML + CSS, UI UX design. I am passionate about technology. 
              I love learning new technologies, fixing little details, and optimizing apps.
            </p>
          </div>
        <span className="curve">
          <img src={process.env.PUBLIC_URL + '/images/white-curve.png'} />
        </span>
      </section>
      <div className="my-skills">
            <Row>
              <Col xs="12"><p className="skills-text">Skills</p></Col>
            </Row>
            <Row className="skills-categories">
              <Col xs="2">Languages</Col>
              <Col xs="2">FrameWorks &#38; Tools</Col>
              <Col xs="2">Libraries</Col>
              <Col xs="2">Database</Col>
            </Row>
            <Row className="skill-list">
              <Col xs="2">
                <Row>
                  {
                    Object.keys(data).length > 0 &&  (data.languages.map((language, index) => (
                      <SkillIcons key={index} iconName={language.icon} iconColor="white" skillName={language.name} />
                    )))
                  }
                </Row>
              </Col>
              <Col xs="2">
                <Row>
                  {
                    Object.keys(data).length > 0 &&  (data.frameworks.map((framework, index) => (
                      <SkillIcons key={index} iconName={framework.icon} iconColor="white" skillName={framework.name} />
                    )))
                  }
                </Row>
              </Col>
              <Col xs="2">
                <Row>
                  {
                    Object.keys(data).length > 0 &&  (data.libraries.map((library, index) => (
                      <SkillIcons key={index} iconName={library.icon} iconColor="white" skillName={library.name} />
                    )))
                  }
                </Row>
              </Col>
              <Col xs="2">
                <Row>
                  {
                    Object.keys(data).length > 0 &&  (data.databases.map((database, index) => (
                      <SkillIcons key={index} iconName={database.icon} iconColor="white" skillName={database.name} />
                    )))
                  }
                </Row>
              </Col>
            </Row>
      </div>
    </div>
  );
}
