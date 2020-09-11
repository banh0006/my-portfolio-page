import React, { useState, useEffect } from "react";
import "../../css/AboutPage.css"

export default function AboutPage() {
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
          <p className="skills-title">Skills</p>
      </div>
    </div>
  );
}
